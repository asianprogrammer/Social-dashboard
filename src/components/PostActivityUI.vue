<script setup>
import PostActivity from './PostActivity.vue';
import ShareIcon from "./icons/ShareIcon.vue";
</script>
<template>
    <section>
        <div class="header flex flex-y-center flex-x-between">
            <h6><b>Post Activity</b></h6>
            <div class="share-btn flex flex-center">
                <ShareIcon />
            </div>
        </div>
        <PostActivity />
    </section>
</template>
<style scoped>
.header {
    margin-bottom: 30px;
}
.share-btn {
    width: 30px;
    height: 30px;
    padding: 8px;
    border-radius: 50%;
    background: black;
}
</style>