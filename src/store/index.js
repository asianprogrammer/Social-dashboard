import {defineStore} from 'pinia';

export const useActivity = defineStore('activity', {
    state: ()=>({
        activity: [
            {
                title: 'By ticket on discounted prices',
                app: 'Hashnode',
                view: "98k",
                up: '52%',
                profile: 'PRO4.jpg'
            },
            {
                title: 'Special offer on our store use the code!',
                app: 'Linkedin',
                view: '12k',
                up: '27%',
                profile: 'PRO3.jpg'
            },
            {
                title: 'Buy ticket on discounted price',
                app: 'WeChat',
                view: '7k',
                up: '10%',
                profile: 'PRO12.jpg'
            },
            {
                title: 'Spacial Offer',
                app: 'Hashnode',
                view: '9k',
                up: '2.5%',
                profile: 'PRO8.jpg'
            }
        ]
    })
})