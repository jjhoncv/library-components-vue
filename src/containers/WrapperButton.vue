<template>
    <div>
        <Button className="btn btn-primary">Button primary</Button>
        <Button className="btn btn-warning">Button warning</Button>
        <Button className="btn btn-success">Button success</Button>
        <Button className="btn btn-default">Button default</Button>
        <Button className="btn btn-danger">Button danger</Button>
        <Button className="btn btn-info">Button info</Button>
    </div>
</template>

<script>
import Button from './../components/button/Button.vue'
export default {
    name: "WrapperButton",
    components : {
        Button
    }
}
</script>

<style>

</style>
