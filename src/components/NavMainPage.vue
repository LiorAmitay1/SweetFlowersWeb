

<template>
    <div>
        
        <b-navbar type="light" variant="faded" class="custom-navbar"  fixed="top">

            <b-nav-item href="https://www.instagram.com/Shiralevy116" target="_blank">
                    <img src="@/assets/instagram.png" alt="Instagram" class="social-icon">
                </b-nav-item>

                <b-nav-item href="https://wa.me/+972523317219" target="_blank">
                    <img src="@/assets/whatsapp.png" alt="WhatsApp" class="social-icon">
                </b-nav-item> 
                <b-nav-item href="https://www.tiktok.com/@shira.levy166?_t=ZS-8znXPWZqGAK&_r=1" target="_blank">
                    <img src="@/assets/tiktok.png" alt="TikTok" class="social-icon">
                </b-nav-item> 

            <b-navbar-brand class="mx-auto position-absolute start-50 translate-middle-x navbar-title">
                Sweet Flowers
            </b-navbar-brand>

            <b-navbar-nav class="ms-auto">
                <router-link to="/gallery" class="nav-link">
                    גלריה
                </router-link>
                <router-link to="/catalog" class="nav-link">
                    קטלוג הפרחים
                </router-link>
                <router-link to="/" class="nav-link">
                    דף הבית
                </router-link>
            </b-navbar-nav>


        </b-navbar>

    </div>
</template>

<script>
export default {
  name: "NavMainPage",
};
</script>

<style scoped>

.navbar-title {
  font-size: 30px;
  color: white;

} 

.custom-navbar {
  background-color: #f8b8d8;
  color: white;
  list-style: none;
  

}
.custom-navbar .nav-link {
  color: white;
  
}

.nav-link:hover {
  color: #2c2c2c;
}

.social-icon {
  width: 30px;
  height: 30px;
  margin-left: 20px;
  cursor: pointer;
  transition: transform 0.3s;
}

.social-icon:hover {
  transform: scale(1.2); 
}



</style>


