<template>
  <div class="w-section">
    <div class="header">
      <div class="title">
        <slot name="title"></slot>
      </div>

      <div class="extra">
        <slot name="extra"></slot>
      </div>
    </div>
    
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'w-section'
}
</script>

<style scoped>
  .header {
    position: relative;
  }
  .title {
    /* line-height: 30px; */
    border-bottom: 1px solid pink;
    display: inline-block;
    min-width: 90%;
    /* min-width: 200px; */
    padding: 5px 30px 5px 0;
    font-size: 14px;
  }
  .title::before {
    content: '';
    display: inline-block;
    width: 12px;
    height: 12px;
    background: pink;
    border-radius: 50%;
    vertical-align: middle;
    margin-right: 10px;
  }
  .title > * {
    display: inline-block;
    vertical-align: middle;
  }
  .extra {
    position: absolute;
    right: 10%;
    top: 5px;
  }
  .content {
    padding: 16px 16px;
  }
</style>
