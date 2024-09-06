<script setup lang="ts">
import TitleText from './UI/TitleText.vue';
import Card from './UI/Card.vue';
import Background from './UI/Background.vue';
import emailjs from '@emailjs/browser';
import { toast } from './UI/toast';
import { onMounted, ref } from 'vue';

const nom = ref('');
const email = ref('');
const message = ref('');
const demande = ref('');

onMounted(() => {
    let recaptchaScript = document.createElement('script');
    recaptchaScript.setAttribute('src', 'https://www.google.com/recaptcha/api.js');
    document.head.appendChild(recaptchaScript);
});

const handleSubmit = async (payload: Event) => {
    // @ts-ignore
    const btn = payload.submitter;

    btn.disabled = true;
    // @ts-ignore
    const key = await grecaptcha.execute();
    emailjs.init('onB7hgwLigQw7j41J');
    emailjs.send('service_s5yyzt8', 'template_io3as5v', {
        nom: nom.value,
        demande: demande.value,
        message: message.value,
        email_client: email.value,
        email_expediteur: "chrislionne.dessinatrice@gmail.com", // chrislionne.dessinatrice@gmail.com leo.lecourt@hotmail.com
        nom_expediteur: "Chris Lionne"
    })
    .then(() => {
        toast({
            title: 'Email envoyé !',
            description: 'Un email de confirmation vous a été envoyé, pensez à regarder vos spams.'
        });
        nom.value = '';
        email.value = '';
        message.value = '';
        demande.value = '';
    }, (error) => {
        toast({
            title: "Une erreur est survenue lors de l'envoi",
            description: "Merci de réessayer plus tard ou d'envoyer un email directement à chrislionne.dessinatrice@gmail.com.",
            variant: "destructive"
        });
    })
    .finally(() => {
        btn.disabled = false;
    });
}
</script>

<template>
    <Background>
    <Card>
        <TitleText>Contact</TitleText>
        <div class="grid grid-cols-1 lg:grid-cols-2 items-center">
            <div>
                <div class="g-recaptcha"
                    data-sitekey="6Lf_UOApAAAAAG3MPHUjfmeQcvaHhXDQpbVS5kmw"
                    data-callback="onSubmit"
                    data-size="invisible">
                </div>
                <form @submit.prevent="handleSubmit">
                    <div class="p-2 w-full">
                        <div class="relative">
                            <label for="name" class="leading-7 py-4 text-lg text-gray-900">Nom <span class="text-red-500">*</span></label>
                            <input type="text" id="nom" name="nom" v-model="nom" required
                                class="w-full bg-white rounded border border-stone-300 focus:ring-2 focus:ring-kaki text-base outline-none text-gray-900 py-1 px-1 leading-8 transition duration-200 ease-in-out ">
                        </div>
                    </div>
                    <div class="p-2 w-full">
                        <div class="relative">
                            <label for="email" class="leading-7 py-4 text-lg text-gray-900">Email <span class="text-red-500">*</span></label>
                            <input type="email" id="email" name="email" v-model="email" required
                                class=" w-full bg-white rounded border border-stone-300 focus:ring-2 focus:ring-kaki text-base outline-none text-gray-900 py-1 px-1 leading-8 transition duration-200 ease-in-out">
                        </div>
                    </div>
                    <div class="p-2 w-full">
                        <fieldset class="relative grid lg:grid-cols-3">
                            <div class="col-span-1">
                                <label class="leading-7 py-4 text-lg text-gray-900">Demande <span class="text-red-500">*</span></label>
                            </div>
                            <div class="col-span-2">
                                <div>
                                    <input type="radio" v-model="demande" value="Etude de projet / permis de construire" name="demande" required class="mr-1 accent-kaki transition duration-200 ease-in-out outline-none focus:ring-2 focus:ring-kaki">
                                    <label class="text-md text-gray-900">Etude de projet / permis de construire</label>
                                </div>
                                <div>
                                    <input type="radio" v-model="demande" value="Autre" name="demande" required class="mr-1 accent-kaki transition duration-200 ease-in-out focus:ring-2 focus:ring-kaki">
                                    <label class="text-md text-gray-900">Autre</label>
                                </div>
                            </div>
                        </fieldset>
                    </div>
                    <div class="p-2 w-full">
                        <div class="relative">
                            <label for="message" class="leading-7 py-4 text-lg text-gray-900">Message <span class="text-red-500">*</span></label>
                            <textarea id="message" name="message" v-model="message" required
                                class=" w-full bg-white rounded border border-stone-300 focus:ring-2 focus:ring-kaki h-32 text-base outline-none text-gray-900 py-1 px-3 resize-none leading-6 transition duration-200 ease-in-out"></textarea>
                        </div>
                    </div>
                    <div class="p-2 w-full">
                        <div>
                            <button id="submitbtn" type="submit"
                                class="disabled:text-stone-900 disabled:bg-gray-300 disabled:hover:bg-gray-300 flex text-white bg-stone-900 border-0 py-3 px-6 focus:bg-kaki hover:bg-kaki rounded text-xl font-bold shadow-lg mx-0 flex-col text-center transition ease-in-out duration-200">
                                Envoyer
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <div>
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5764.32455260941!2d-1.3235060234412883!3d43.7487268462466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd51570afe6e914b%3A0x1bc2f70a44c0e57f!2sChris%20Lionne!5e0!3m2!1sfr!2sfr!4v1715866311932!5m2!1sfr!2sfr"
                    width="100%"
                    height="475px"
                    style="border:0;" 
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    class="lg:ml-4 rounded-lg shadow-lg">
                </iframe>
            </div>
        </div>
    </Card>
</Background>
</template>