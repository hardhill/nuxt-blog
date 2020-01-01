export const state = ()=>({
    token:true
})

export const mutations = {
    setToken(state,token){
        state.token = token
    },
    clearToken(state){
        state.token = null
    }
}

export const actions = {
   
    async actLogin(context,dataForm){
        try {    
        const token = await new Promise((resolve,reject)=>{
            setTimeout(()=>resolve('mock-token'),2000)
        })
        context.dispatch('setToken',token)
    }catch(e){
        context.commit('setError',e,{root:true})
        throw e
    }
    },
    setToken({commit},token){
        commit('setToken',token)
    },
    logout({commit}){
        commit('clearToken')
    },
    async userCreated({commit},formData){
        try {
            console.log('Create user', formData)
        } catch (error) {
            
        }
    }
}

export const getters = {
    isAuthenticated: (state)=>{
        return Boolean(state.token)
    }
}