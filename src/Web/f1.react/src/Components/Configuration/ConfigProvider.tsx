
interface Configuration {
    UserPoolId: string;
    ClientId: string;
}

class ConfigProvider {

    getConfig(): Configuration {
        return {
            UserPoolId: "ap-southeast-2_HZsWUxwI3",
            ClientId: "72jec4bt2p1aoe55ropg9n17tk"
        }
	}

}

export default ConfigProvider