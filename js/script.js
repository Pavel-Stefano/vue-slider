const app = new Vue({
    el:'#app',
    data: {
        activeIndex: 0,
        // scroll: null,
        slides: [
            {
                image: 'img/01.jpg',
                title: 'Svezia',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                image: 'img/02.jpg',
                title: 'Svizzera',
                text: 'Lorem ipsum.',
            },
            {
                image: 'img/03.jpg',
                title: 'Gran Bretagna',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
            {
                image: 'img/04.jpg',
                title: 'Germania',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
            },
            {
                image: 'img/05.jpg',
                title: 'Paradise',
                text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
            }
        ],
    },
    methods: {
        next(){
            this.activeIndex >=4 ? this.activeIndex = 0: this.activeIndex++;
            console.log("next")
        },
        prev(){
            this.activeIndex <=0 ? this.activeIndex = 4: this.activeIndex--;
            console.log("prev")
        },
        autoScroll(){
            setInterval(()=>{
                this.next();
            }, 3000);
        }
    },
    mounted() {
        this.autoScroll();
    }
})


console.log(slides);