function t(t,o,a){}var o={methods:{dispatch(t,o,a){let s=this.$parent||this.$root,n=s.$options.name;for(;s&&(!n||n!==t);)s=s.$parent,s&&(n=s.$options.name);s&&s[o](a)},broadcast(o,a,s){t.call(this,o,a,s)}}};export{o as E};