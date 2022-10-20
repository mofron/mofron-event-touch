/**
 * @file mofron-event-touch/index.js
 * @brief touch event for mofron
 */
const TouchStart = require("mofron-event-touchstart");
const TouchMove  = require("mofron-event-touchmove");
const TouchEnd   = require("mofron-event-end");
const ConfArg    = mofron.class.ConfArg;

module.exports = class extends mofron.class.Event {
    /**
     * initialize event
     * 
     * @param (mixed) short-form parameter
     *                key-value: event config
     * @short
     * @type private
     */
    constructor (prm) {
        try {
            super();
            this.modname("Touch");
            
	    if (undefined !== prm) {
                this.config(prm);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * event contents
     * 
     * @param (mofron.class.dom) target dom object
     * @type private
     */
    contents (dom) {
        try {
	    let touch = this;
            dom.component().event([
                new TouchStart(
		    (p1,p2,p3) => {
                        touch.execListener({ event:p2, type:"start" });
		    }
                ),
                new TouchMove(
                    (p1,p2,p3) => {
                        touch.execListener({ event:p2, type:"move" });
                    }
                ),
		new TouchEnd(
                    (p1,p2,p3) => {
                        touch.execListener({ event:p2, type:"end" });
                    }
		)
            ]);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
/* end of file */
