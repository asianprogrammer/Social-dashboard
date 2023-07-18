<script setup>
import CardUI from "./CardUI.vue";
import EngageIcon from "./icons/EngageIcon.vue";
import StarIcon from "./icons/StarIcon.vue";
import CommentIcon from "./icons/CommentIcon.vue";
</script>
<template>
  <CardUI
    view="14.6k"
    object="Engagement Rate"
    rate="0.8%"
    date="Weakly"
    bg="1"
  >
    <template #icon>
      <EngageIcon />
    </template>
  </CardUI>
  <CardUI view="16.2k" object="Account Likes" rate="0.3%" date="Monthly" bg="2">
    <template #icon>
      <StarIcon />
    </template>
  </CardUI>
  <CardUI view="27.8k" object="User comments" rate="6.36%" date="Yearly" bg="3">
    <template #icon>
      <CommentIcon class="LargeIcon" />
    </template>
  </CardUI>
</template>
<style scoped>
.LargeIcon {
  transform: scale(1.8);
  -o-transform: scale(1.8);
  -moz-transform: scale(1.8);
  -webkit-transform: scale(1.8);
}
</style>
