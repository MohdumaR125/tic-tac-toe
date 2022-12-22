const ActionBar = (props) => {
    const {goBack} = props;
    return(
        <div>
            <svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={goBack}>
<path d="M10.62 0.989998C10.13 0.499998 9.34 0.499998 8.85 0.989998L0.539998 9.3C0.149998 9.69 0.149998 10.32 0.539998 10.71L8.85 19.02C9.34 19.51 10.13 19.51 10.62 19.02C11.11 18.53 11.11 17.74 10.62 17.25L3.38 10L10.63 2.75C11.11 2.27 11.11 1.47 10.62 0.989998Z" fill="#323232"/>
</svg>

        </div>
    )
}
export default ActionBar