export function viteNetSuite() {
	return {
		name: "vite:netsuite",
		enforce: "post",
		generateBundle: (_, bundle) => {
            
            for (const file in bundle) {
                if (Object.hasOwnProperty.call(bundle, file)) {
                    const element = bundle[file];
                    console.log(element);
                    
                }
            }
		},
	}
}
