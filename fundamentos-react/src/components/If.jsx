//so preciso importar o react quando o codigo é JSX

export default function (props) {
    if(props.test) {
        return props.children
    } else {
        return false
    }
}