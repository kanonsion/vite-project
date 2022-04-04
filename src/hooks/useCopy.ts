import {ElMessage} from 'element-plus'

export const useCopy = (val: string) => {
    const input = document.createElement('input')
    document.body.appendChild(input)
    input.value = val
    input.select()
    document.execCommand('copy')
    document.body.removeChild(input)

    ElMessage.success('复制成功')
}
