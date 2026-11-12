/** @odoo-module **/

import { Component } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { standardActionServiceProps } from "@web/webclient/actions/action_service";

export class IndexMakerAction extends Component {
    static template = "index_file_maker.IndexMakerAction";
    static props = { ...standardActionServiceProps };

    setup() {
        try {
            const params = (this.props && this.props.action && this.props.action.params) || {};
            const context = (this.props && this.props.action && this.props.action.context) || {};
            const tId = params.template_id || context.active_id || '';
            this.iframeUrl = `/index_file_maker/static/src/standalone/index.html?v=19.0.1${tId ? `&template_id=${encodeURIComponent(tId)}` : ''}`;
        } catch (e) {
            this.iframeUrl = "/index_file_maker/static/src/standalone/index.html?v=19.0.1";
        }
    }

    get url() {
        return this.iframeUrl;
    }
}

registry.category("actions").add("index_file_maker.builder", IndexMakerAction);
