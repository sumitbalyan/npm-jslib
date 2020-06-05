function $(selector) {
    const self = {
        element : document.querySelector(selector),
        html : () => self.element,
        on : (event, callback) => {
            document.addEventListener(event, callback);
        },
        hide : () => {
            self.element.style.display = 'none';
        },
        show : () => {
            self.element.style.display = 'block';
        },
        setBackground : (color) => self.element.style.background = color,
        removeBackground : () => self.element.style.background = null,
        attr : (name, value) => {
            if(value === null){
                self.element.getAttribute(name);
            }
            else{
                self.element.setAttribute(name, value);
            }
            
        },
        removeAttr : (name) => {
            self.element.removeAttribute(name);
        },
        getId : () =>  self.element.id,
        getText : () => self.element.innerText,
        setColor : (color) => {
            self.element.style.color = color;
        },
        removeColor : () => {
            self.element.style.color = null;
        },
    };

    return self;
}

module.exports = $;