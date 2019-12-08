export const state = ()=>({
    token:null
})

export const mutations = {
    setToken(state,token){
        state.token = token
    }
}

export const actions = {
    async actLogin(context,dataForm){
        const token = await new Promise(resolve=>{
            setTimeout(()=>resolve('mock-token'),2000)
        })
        context.dispatch('setToken',token)
    },
    setToken({commit},token){
        commit('setToken',token)
    }
}

export const getters = {
    isAuthenticated: (state)=>{
        return Boolean(state.token)
    }
}