window.$docsify = {
    search: {
        maxAge: 86400000,
        paths: auto,
        placeholder: "找找说不定就有了",
        noData: "没有(理直气壮",
        depth: 4,
        hideOtherSidebarContent: false,
        namespace: "docsify-demo",
    },
    darklightTheme: {
        defaultTheme: "light",
        siteFont: "Source Sans Pro,Helvetica Neue,Arial,sans-serif",
        codeFontFamily: "Roboto Mono, Monaco, courier, monospace",
        bodyFontSize: "15px",
        dark: {
            background: "rgb(28,32,34)",
            highlightColor: "#e96900",
            codeBackgroundColor: "rgb(34,39,46)",
            codeTextColor: "#b4b4b4",
        },
        light: {
            highlightColor: "#e96900",
        },
    },
    count: {
        countable: true,
        position: "top",
        margin: "10px",
        float: "right",
        fontsize: "0.9em",
        color: "rgb(90,90,90)",
        language: "chinese",
        localization: {
            words: "字",
            minute: "分钟",
        },
        isExpected: true,
    },
    "flexible-alerts": {
        note: {
            label: "提示",
        },
        tip: {
            label: "建议",
        },
        warning: {
            label: "警告",
        },
        attention: {
            label: "注意",
        },
    },
};