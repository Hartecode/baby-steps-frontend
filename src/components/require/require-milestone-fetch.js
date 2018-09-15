import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export default () => Component => {
    function RequiresData(props) {
        const { milestoneData, selectedBaby, babyData, ...passThroughProps} = props;
        if (authenticating) {
            return <div>Logging in...</div>;
        } else if (!loggedIn || error) {
            return <Redirect to="/" />;
        }

        return <Component {...passThroughProps} />;
    }

    const displayName = Component.displayName || Component.name || 'Component';
    RequiresLogin.displayName = `RequiresLogin(${displayName})`;

    const mapStateToProps = (state, props) => ({
        milestoneData: state.protectedData.milestoneData,
        selectedBaby: state.protectedData.selectedBaby,
        babyData: state.protectedData.babyData
    });

    return connect(mapStateToProps)(RequiresData);
};