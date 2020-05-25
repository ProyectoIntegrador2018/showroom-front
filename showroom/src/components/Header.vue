<template>
<header class="masthead" id="page-top">
    <div class="container">
        <div class="intro-text">
            <v-flex xs12>
                <v-text-field v-model="search" label="Search tags"  outlined rounded solo clearable></v-text-field>
            </v-flex>
            <div class="intro-heading text-uppercase">
                <HeaderData
                :titles1="statTitle1"
                :titles2="statTitle2"
                :titles3="statTitle3"
                :val1="statValue1"
                :val2="statValue2"
                :val3="statValue3"
                ></HeaderData>
            </div>
        </div>
    </div>
</header>
</template>

<script>
export default {
    name: 'Header',
    props: {
        msg: String,
        statTitle1: String,
        statTitle2: String,
        statTitle3: String,
        statValue1: String,
        statValue2: String,
        statValue3: String,

    },
    components: {
        HeaderData: () => import('@/components/Header/Numbers'),
    }
}
</script>

<style>
header.masthead {
    text-align: center;
    color: white;
    background-image: url("../assets/wallpaper.jpg");
    background-repeat: no-repeat;
    background-attachment: scroll;
    background-position: center center;
    background-size: cover;
}

header.masthead .intro-text {
    padding-top: 150px;
    padding-bottom: 10px;
    ;
}

header.masthead .intro-text .intro-lead-in {
    font-size: 22px;
    font-style: italic;
    line-height: 22px;
    margin-bottom: 25px;
    font-family: 'Droid Serif', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
}

header.masthead .intro-text .intro-heading {
    font-size: 50px;
    font-weight: 700;
    line-height: 50px;
    margin-bottom: 0px;
    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
}

@media (min-width: 768px) {
    header.masthead .intro-text {
        padding-top: 150px;
        padding-bottom: 10px;
    }

    header.masthead .intro-text .intro-lead-in {
        font-size: 40px;
        font-style: italic;
        line-height: 40px;
        margin-bottom: 25px;
        font-family: 'Droid Serif', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
    }

    header.masthead .intro-text .intro-heading {
        font-size: 75px;
        font-weight: 700;
        line-height: 75px;
        margin-bottom: 0px;
        font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
    }
}
</style>