import React, { PureComponent } from 'react';
import '../styles/default.css';
import { Persona,
    PersonaSize,
    PersonaPresence,
    Label, getTheme,
    PrimaryButton,
    SearchBox,
    FontWeights,
    Stack,
    Dialog,
    DialogFooter,
    DefaultButton,
    DialogType } from 'office-ui-fabric-react';

class Default extends PureComponent {
    constructor (props) {
        super(props);

        this.state = {
            hideDialog: true,
            data: {
                quantity: {
                    ratting: '',
                    comment: ''
                },
                quality: {
                    ratting: '',
                    comment: ''
                },
                communication: {
                    ratting: '',
                    comment: ''
                },
                initiative: {
                    ratting: '',
                    comment: ''
                },
                professionalism: {
                    ratting: '',
                    comment: ''
                },
                integration: {
                    ratting: '',
                    comment: ''
                }
            }
        };
    }

    showDialog () {
        this.setState({ hideDialog: false });
    }

    closeDialog () {
        this.setState({ hideDialog: true });
    }

    render () {
        return (
            <div className="p_default">
                <div className="p_nav">
                    <div className="p_logo">
                        <img className="logo" src="https://res.cloudinary.com/dlwzb2uh3/image/upload/v1583087781/pulse_m7iqhx.svg"/>
                    </div>
                    <div className="p_user">
                        <Persona
                            showInitialsUntilImageLoads
                            hidePersonaDetails
                            imageUrl={'https://res.cloudinary.com/dby88h516/image/upload/v1582881041/barefootnomad/n80zemfrgoewoo4m9oer.jpg'}
                            size={PersonaSize.size120}
                            presence={PersonaPresence.online}
                            imageAlt="Annie Ried, status is available at 4 PM"
                        />
                        <div className="p_user-info">
                            <Label style={{ fontSize: 18, color: getTheme().palette.themePrimary }}>Dominique Nsengimana</Label>
                            <Label disabled>nsengimanavedadom@gmail.com</Label>
                        </div>
                    </div>
                    <div className="p_footer">
                        <PrimaryButton text="Sign out" onClick={() => {}} allowDisabledFocus />
                    </div>
                </div>
                <div className="p_content">
                    <div className="p_nav_bar">
                        <SearchBox
                            styles={{ root: { height: 45 } }}
                            placeholder="Search"
                            onChange={() => {}}
                        />
                    </div>
                    <div className="p_contents">
                        <div className="p_card">
                            <Label style={{ fontSize: 28, fontWeight: FontWeights.bold, color: getTheme().palette.themePrimary }}>Simulation</Label>
                            <Stack horizontal tokens={{ childrenGap: 12 }}>
                                <Stack.Item align="center"><Label style={{ fontSize: 12 }}>From</Label></Stack.Item>
                                <Stack.Item align="center"><Label style={{ fontSize: 16, fontWeight: FontWeights.bold }}>21 Jan 2019</Label></Stack.Item>
                                <Stack.Item align="center"><Label style={{ fontSize: 12 }}>To</Label></Stack.Item>
                                <Stack.Item align="center"><Label style={{ fontSize: 16, fontWeight: FontWeights.bold }}>21 Dec 2019</Label></Stack.Item>
                            </Stack>
                            <PrimaryButton className="badge_btn" text="Software Engineer" allowDisabledFocus />
                            <div className="p_progress">
                                <div className="p_circle p_prog_item_active p_c_w">1</div>
                                <div className="p_prog_item">
                                    <div className="p_line"/>
                                    <div onClick={() => {this.showDialog();}} className="p_circle p_c_d">2</div>
                                </div>
                                <div className="p_prog_item">
                                    <div className="p_line"/>
                                    <div className="p_circle p_c_d">3</div>
                                </div>
                                <div className="p_prog_item">
                                    <div className="p_line"/>
                                    <div className="p_circle p_c_d">4</div>
                                </div>
                                <div className="p_prog_item">
                                    <div className="p_line"/>
                                    <div className="p_circle p_c_d">5</div>
                                </div>
                                <div className="p_prog_item">
                                    <div className="p_line"/>
                                    <div className="p_circle p_c_d">6</div>
                                </div>
                                <div className="p_prog_item">
                                    <div className="p_line"/>
                                    <div className="p_circle p_c_d">7</div>
                                </div>
                                <div className="p_prog_item">
                                    <div className="p_line"/>
                                    <div className="p_circle p_c_d">8</div>
                                </div>
                                <div className="p_prog_item">
                                    <div className="p_line"/>
                                    <div className="p_circle p_c_d">9</div>
                                </div>
                                <div className="p_prog_item">
                                    <div className="p_line"/>
                                    <div className="p_circle p_c_d">10</div>
                                </div>
                                <div className="p_prog_item">
                                    <div className="p_line"/>
                                    <div className="p_circle p_c_d">11</div>
                                </div>
                                <div className="p_prog_item">
                                    <div className="p_line"/>
                                    <div className="p_circle p_c_d">12</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p_floating-action_btn">+</div>
                <div style={{ position: 'absolute' }}>
                    <Dialog
                        styles={{ main: { position: "absolute" } }}
                        hidden={this.state.hideDialog}
                        onDismiss={() => {this.closeDialog();}}
                        dialogContentProps={{
                            type: DialogType.largeHeader,
                            title: 'All emails together',
                            subText: 'Your Inbox has changed. No longer does it include favorites, it is a singular destination for your emails.'
                        }}
                        modalProps={{
                            isBlocking: false,
                            styles: { main: { maxWidth: 450 } }
                        }}>
                        <div>
                            <div className="report-model">
                                <div className="report-row pd-16">
                                    <div className="report-header">Attributes</div>
                                </div>
                                <div className="report-row">
                                    <div className="report-table">
                                        <div className="report-table-row pd-l-16 row-items" key={0} onClick={() => {}}>
                                            <div className="report-table-col row-item">Quantity</div>
                                            <div className="report-table-col row-item">
                                                <div className="item-border">{this.state.data.quantity.ratting}</div>
                                            </div>
                                            <div className="report-table-col row-item cl-brue align-r">{}</div>
                                        </div>
                                    </div>
                                    <div className="report-table-review">{}</div>
                                </div>
                            </div>
                        </div>
                        <DialogFooter>
                            <PrimaryButton onClick={this._closeDialog} text="Save" />
                            <DefaultButton onClick={this._closeDialog} text="Cancel" />
                        </DialogFooter>
                    </Dialog>
                </div>
            </div>
        );
    }
}

export default Default;
