import React, { useState, useEffect } from 'react'
import { Feather as Icon } from '@expo/vector-icons'
import { View, Image, Text, TextInput, ImageBackground, KeyboardAvoidingView, StyleSheet, Platform } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import RNPickerSelect from 'react-native-picker-select';
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'

interface IBGEUFResponse {
	nome: string,
	sigla: string
}
interface IBGECityResponse {
	nome: string
}
interface Ufs {
	label: string,
	value: string
}
interface Cities {
	label: string,
	value: string
}

const Home = () => {
	const [ uf, setUf ] = useState('')
	const [ city, setCity ] = useState('')

	const [ ufs, setUfs ] = useState<Ufs[]>([])
	const [ cities, setCities ] = useState<Cities[]>([])

	const navigation = useNavigation()

	useEffect(() => {
		axios.get<IBGEUFResponse[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados').then(response => {
			const ufInitials  = response.data.map(uf => ({ 'label': uf.nome, 'value': uf.sigla }))

			setUfs(ufInitials)
		})
	}, [])

	useEffect(() => {
		if(uf === '') {
			return
		}

		axios.get<IBGECityResponse[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`)
			.then(response => {
				const cityName = response.data.map(city => ({ 'label': city.nome, 'value': city.nome }))

				setCities(cityName)
			})
	}, [uf])

	if(!ufs) {
		return null
	}

	function handleNavgateToPoints() {
		navigation.navigate('Points', {
			uf,
			city,
		})
	}

	// Nota: trocar inputs por react-native-picker-select
	return (
		<KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
			<ImageBackground
				style={styles.container}
				source={require('../../assets/home-background.png')}
				imageStyle={{ width: 274, height: 368, }}
				>
				<View style={styles.main}>
					<Image source={require('../../assets/logo.png')} />
					<View>
						<Text style={styles.title}>Seu marketplace de coleta de resíduos</Text>
						<Text style={styles.description}>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.</Text>
					</View>
				</View>

				<View style={styles.footer}>
					<RNPickerSelect
						onValueChange={(value) => setUf(value)}
						placeholder={{ label: 'Selecione uma UF', value: null }}
						items={ufs}
					/>
					<RNPickerSelect
						onValueChange={(value) => setCity(value)}
						placeholder={{ label: 'Selecione uma Cidade', value: null }}
						items={cities}
					/>
					<RectButton style={styles.button} onPress={handleNavgateToPoints}>
						<View style={styles.buttonIcon}>
							<Text>
								<Icon name="arrow-right" color="#FFF" size={24} />
							</Text>
						</View>
						<Text style={styles.buttonText}>Entrar</Text>
					</RectButton>
				</View>
			</ImageBackground>
		</KeyboardAvoidingView>
	)
}

export default Home

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 32,
	},

	main: {
		flex: 1,
		justifyContent: 'center',
	},

	title: {
		color: '#322153',
		fontSize: 32,
		fontFamily: 'Ubuntu_700Bold',
		maxWidth: 260,
		marginTop: 64,
	},

	description: {
		color: '#6C6C80',
		fontSize: 16,
		marginTop: 16,
		fontFamily: 'Roboto_400Regular',
		maxWidth: 260,
		lineHeight: 24,
	},

	footer: {},

	select: {},

	input: {
		height: 60,
		backgroundColor: '#FFF',
		borderRadius: 10,
		marginBottom: 8,
		paddingHorizontal: 24,
		fontSize: 16,
	},

	button: {
		backgroundColor: '#34CB79',
		height: 60,
		flexDirection: 'row',
		borderRadius: 10,
		overflow: 'hidden',
		alignItems: 'center',
		marginTop: 8,
	},

	buttonIcon: {
		height: 60,
		width: 60,
		backgroundColor: 'rgba(0, 0, 0, 0.1)',
		justifyContent: 'center',
		alignItems: 'center'
	},

	buttonText: {
		flex: 1,
		justifyContent: 'center',
		textAlign: 'center',
		color: '#FFF',
		fontFamily: 'Roboto_500Medium',
		fontSize: 16,
	}
});