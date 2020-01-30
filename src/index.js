window.onload = () => {
  new Vue({
    el: '#app',
    data() {
      return {
      	name: 'BootstrapVue',
        show: true
      }
    },
    methods: {
      closePopups() {
        for(let i = 1; i <= 6; i++ ){
      	 		let key = 'popover' + i;
      	 		let item = this.$refs[key].$emit('close');
      	 	}
      },
      selectSvg() {
      		let list_items = document.getElementsByClassName("listitems");
      		let item;
      		for(let i = 0; i < list_items.length; i++ ) {
      			item = list_items[i];
  				item.style.cssText = '';
      		}
      		let p_items = document.getElementsByClassName("p-items");
      		for(let i = 0; i < p_items.length; i++ ) {
      			item = p_items[i];
  				item.setAttribute('fill', '#03FC7E');
  				item.setAttribute('opacity', '0.2');
      		}

      		item = event.currentTarget;
      		item.setAttribute('fill', '#BF55EC');
  			item.setAttribute('opacity', '0.2');

  			let id = 'li' +  item.id[1];
  			let idnum = item.id[1];
      	 	item = document.getElementById(id);
      	 	item.style.cssText = 'background-color : rgba(3, 252, 126, 0.19)';   

      	 	for(let i = 1; i <= 6; i++ ){
      	 		let key = 'popover' + i;
      	 		item = this.$refs[key].$emit('close');
      	 	}
      	 	let key = 'popover' + idnum;
      	 	this.$refs[key].$emit('open');   	 	
      },
      selectList(event) {
      		let list_items = document.getElementsByClassName("listitems");
      		let item;
      		for(let i = 0; i < list_items.length; i++ ) {
      			item = list_items[i];
  				item.style.cssText = '';
      		}
      		let p_items = document.getElementsByClassName("p-items");
      		for(let i = 0; i < p_items.length; i++ ) {
      			item = p_items[i];
  				item.setAttribute('fill', '#03FC7E');
  				item.setAttribute('opacity', '0.2');
      		}

      		item = event.currentTarget;
      	 	item.style.cssText = 'background-color : rgba(3, 252, 126, 0.19)';

      	 	let id = 's' + item.id[2];
      	 	item = document.getElementById(id);
      	 	item.setAttribute('fill', '#BF55EC');
  			item.setAttribute('opacity', '0.2');
      }
    }
  })
}