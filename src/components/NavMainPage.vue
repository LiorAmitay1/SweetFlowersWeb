

<template>
    <div>
        
        <b-navbar type="light" variant="faded" class="px-3" dir="rtl">
            <b-navbar-nav class="ms-auto">
                <router-link to="/" class="nav-link">
                    דף הבית
                </router-link>
                <router-link to="/catalog" class="nav-link">
                    קטלוג הפרחים
                </router-link>
                <router-link to="/gallery" class="nav-link">
                    גלריה
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



