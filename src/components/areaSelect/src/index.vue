<template>
    <div>
        <el-select
            v-model="province"
            clearable
            placeholder="请选择省">
            <el-option
                v-for="item in pcasCode"
                :key="item.code"
                :label="item.name"
                :value="item.code">
            </el-option>
        </el-select>

        <el-select
            v-model="city"
            clearable
            placeholder="请选择市"
            :disabled="!province">
            <el-option
                v-for="item in cities"
                :key="item.code"
                :label="item.name"
                :value="item.code">
            </el-option>
        </el-select>

        <el-select
            v-model="district"
            clearable
            placeholder="请选择区"
            :disabled="!(province && city)">
            <el-option
                v-for="item in districts"
                :key="item.code"
                :label="item.name"
                :value="item.code">
            </el-option>
        </el-select>

        <el-select
            v-model="town"
            clearable
            placeholder="请选择镇"
            :disabled="!(province && city && district)">
            <el-option
                v-for="item in towns"
                :key="item.code"
                :label="item.name"
                :value="item.code">
            </el-option>
        </el-select>
    </div>
</template>

<script lang="ts" setup>
    import {
        computed, ref, watch, PropType,
    } from 'vue'
    import pcasCode from '../lib/pcas-code.json'

    interface Data {
        code: string
        name: string
        children?: Data[]
    }

    const props = defineProps<{
        value: Record<string, unknown>
    }>()
    const emits = defineEmits(['update:value'])

    const province = ref('')
    const city = ref('')
    const district = ref('')
    const town = ref('')

    const cities = computed(() => (pcasCode as Data[]).find(e => e.code === province.value)?.children || [])

    const districts = computed(() => cities.value.find(e => e.code === city.value)?.children || [])

    const towns = computed<Data[]>(() => districts.value.find(e => e.code === district.value)?.children || [])

    watch(() => province.value, () => {
        city.value = ''
        district.value = ''
        town.value = ''
    })

    watch(() => city.value, () => {
        district.value = ''
        town.value = ''
    })

    watch(() => district.value, () => {
        town.value = ''
    })

    watch(() => town.value, (val) => {
        if (val) {
            emits('update:value', {
                province: {
                    code: province.value,
                    name: (pcasCode as Data[]).find(e => e.code === province.value)?.name
                },
                city: {
                    code: city.value,
                    name: cities.value.find(e => e.code === city.value)?.name
                },
                district: {
                    code: district.value,
                    name: districts.value.find(e => e.code === district.value)?.name
                },
                town: {
                    code: town.value,
                    name: towns.value.find(e => e.code === town.value)?.name
                }
            })
        }
    })

</script>

<style scoped>

</style>
