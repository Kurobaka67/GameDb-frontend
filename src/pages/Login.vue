<template>
    <div class="surface-0 flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden">
        <Toast />
        <div class="grid justify-content-center p-2 lg:p-0" style="min-width:80%">
            <div class="col-12 mt-5 xl:mt-0 text-center">
                <img src="images/avatar/KurobaCat.png" alt="Kuro logo" class="mb-5" style="width:81px; height:60px;">
            </div>
            <div class="col-12 xl:col-6" style="border-radius:56px; padding:0.3rem; background: linear-gradient(180deg, var(--primary-color), rgba(33, 150, 243, 0) 30%);">
                <div class="h-full w-full m-0 py-7 px-4" style="border-radius:53px; background: linear-gradient(180deg, var(--surface-50) 38.9%, var(--surface-0));">
                    <div class="text-center mb-5">
                        <i class="pi-menubar pi pi-user" />
                        <div class="text-900 text-3xl font-medium mb-3">Welcome !</div>
                        <span class="text-600 font-medium">Sign in to continue</span>
                    </div>
                
                    <div class="w-full md:w-10 mx-auto">
                        <label for="email1" class="block text-900 text-xl font-medium mb-2">Email</label>
                        <InputText id="email1" v-model="email" type="text" class="w-full mb-3" placeholder="Email" style="padding:1rem;" />
                
                        <label for="password1" class="block text-900 font-medium text-xl mb-2">Password</label>
                        <Password id="password1" v-model="password" placeholder="Password" :toggleMask="true" class="w-full mb-3" inputClass="w-full" inputStyle="padding:1rem"></Password>
                
                        <div class="flex align-items-center justify-content-between mb-5">
                            <div class="flex align-items-center">
                                <Checkbox id="rememberme1" v-model="checked" :binary="true" class="mr-2"></Checkbox>
                                <label for="rememberme1">Remember me</label>
                            </div>
                            <a class="font-medium no-underline ml-2 text-right cursor-pointer" style="color: var(--primary-color)">Forgot password?</a>
                        </div>
                        <div class="flex align-items-center mb-5">
                            <p>You don't have an account ?</p>
                            <Button label="Sign on" class="p-button-link" @click="signon"></Button>
                        </div>
                        <Button label="Sign In" class="w-full p-3 text-xl" @click="login"></button>
                        <div class="col-7 text-right">
                            <Button label="Home" @click="gotohome"></button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: '',
            checked: false,
            user: null,
        }
    },
    created() {
        this.email = localStorage.getItem('email');
        this.password = localStorage.getItem('password');
        if(this.email && this.password){
            this.checked = true;
        }
    },
    computed: {
        logoColor() {
            if (this.$appState.darkTheme) return 'white';
            return 'dark';
        }
    },
    methods: {
        gotohome() {
            this.$router.push('/');
        },
        signon() {
            this.$router.push('/signon');
        },
        login() {
            this.servicesFactory.getUsersService().login(this.email, this.password).then(data => {
                this.user = data;
                if(this.user){
                    if(this.checked){
                        localStorage.setItem('email', this.email);
                        localStorage.setItem('password', this.password);
                    }else{
                        localStorage.removeItem('email');
                        localStorage.removeItem('password');
                    }
                    sessionStorage.setItem('user', JSON.stringify(data));
                    this.$router.push('/');
                }
                else {
                    this.$toast.add({severity:'info', summary:'Failed', detail:'Wrong password or email', life: 3000});
                }
            });
            
        }
    }
}
</script>

<style scoped>
.pi-eye {
    transform:scale(1.6);
    margin-right: 1rem;
}

.pi-eye-slash {
    transform:scale(1.6);
    margin-right: 1rem;
}

.pi-menubar{
	font-size: 2.5em
}
</style>