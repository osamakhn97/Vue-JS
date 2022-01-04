import mutations  from './mutations.js';
import getters from './getters.js';
import actions from './actions.js';
export default{
    state(){
        return {
          userId :null,
          token:null,
          tokenExpiration:null
        };
      },
      mutations:mutations,
      getters:getters,
      actions:actions
}