import React from 'react';
import PropTypes from 'prop-types';

const LocationPin = (props) => {
    const { className, style } = props;
    return (
        <svg
            className={className}
            style={style}
            fill="currentColor"
            width="28px"
            height="30px"
            viewBox="0 0 28 30"
        >
            <g id="Variant-3" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g
                    id="dispatch/rides-calendar-with-rides-completed-and-assigned"
                    transform="translate(-36.000000, -257.000000)"
                    fill="currentColor"
                    fillRule="nonzero"
                >
                    <g id="Group-8" transform="translate(12.000000, 11.000000)">
                        <path
                            d="M44.4421892,265.400908 C48.7290546,266.22275 52,267.909785 52,270.41123 C52,274.080099 44.9568569,276 38.0003049,276 C31.0437529,276 24,274.080718 24,270.41123 C24,267.909785 27.2715552,266.22275 31.5578108,265.400908 C31.9950345,266.116226 32.4712851,266.861272 32.9877823,267.635425 C28.6442058,268.295004 26.4214997,269.70768 26.4214997,270.410611 C26.4214997,271.346408 30.3607814,273.540669 38.0003049,273.540669 C45.6392186,273.540669 49.5778905,271.346408 49.5778905,270.410611 C49.5778905,269.708299 47.3551844,268.295004 43.0128275,267.635425 C43.5287149,266.861272 44.0049655,266.116226 44.4421892,265.400908 Z M38.0003049,246 C42.5219418,246 46.1880349,249.72275 46.1880349,254.315648 C46.1880349,255.588399 45.5592106,257.630246 44.6501325,259.847281 L44.3182122,260.636071 C44.0899308,261.165491 43.8484041,261.700741 43.5981726,262.234086 L43.2168645,263.031706 L43.0223782,263.427631 L43.0223782,263.427631 L42.6278699,264.210083 C42.5616453,264.339206 42.4952314,264.467605 42.4286991,264.59516 L42.028653,265.349388 C41.8284874,265.720469 41.6285337,266.081773 41.4307075,266.430038 L41.0384594,267.108214 C40.5207578,267.986689 40.0272666,268.756963 39.5943115,269.357143 C39.222336,269.873658 38.6302241,270.177746 38.0009147,270.177746 C37.3716053,270.177746 36.7794934,269.873658 36.4056885,269.357143 C35.9726225,268.756963 35.4790809,267.986668 34.961371,267.108164 L34.5691244,266.429964 C34.5031838,266.313872 34.4370074,266.19633 34.3706661,266.077461 L33.9712069,265.349274 L33.5711942,264.595018 L33.1740318,263.820495 C33.1082647,263.690041 33.0427581,263.558985 32.9775831,263.427447 L32.5910782,262.633407 C31.065509,259.44186 29.8125749,256.112135 29.8125749,254.315648 C29.8125749,249.72275 33.4774484,246 38.0003049,246 Z M38.0003049,248 C34.5892515,248 31.8125749,250.820202 31.8125749,254.315648 C31.8125749,255.207623 32.3055149,256.841595 33.0584901,258.729471 L33.3346642,259.405529 L33.6301574,260.097903 C33.6808897,260.214393 33.7323323,260.331365 33.7844375,260.448718 L34.1046429,261.156626 C34.1592095,261.275109 34.2143441,261.393776 34.2699992,261.512526 L34.6097969,262.225239 L34.9598119,262.935193 L35.3177686,263.637621 L35.6813915,264.327754 C35.7423411,264.441486 35.803432,264.554508 35.8646168,264.666719 L36.2324726,265.329467 C36.2938432,265.43804 36.3552129,265.545603 36.4165343,265.652058 L36.7835032,266.276693 C36.8444415,266.378317 36.9052368,266.478635 36.9658414,266.577545 L37.3268035,267.153337 C37.505762,267.431999 37.6821521,267.696216 37.8546939,267.943304 L38,268.148 L38.1436707,267.94551 C38.4970952,267.439296 38.8665929,266.861448 39.241199,266.234941 L39.6171019,265.593065 C39.6799008,265.483666 39.7427401,265.373128 39.805569,265.261557 L40.1820118,264.580594 C40.2445962,264.465318 40.3070686,264.349223 40.3693784,264.232414 L40.7408788,263.523849 L41.1060387,262.803266 L41.4624213,262.075768 L41.6365598,261.711022 L41.6365598,261.711022 L41.9752081,260.982726 L42.1391088,260.620453 L42.1391088,260.620453 L42.4545405,259.902845 C42.5056365,259.784227 42.5559607,259.666172 42.6054623,259.548787 L42.8921951,258.853353 C43.6283276,257.024815 44.1278913,255.422031 44.1829654,254.480645 L44.1880349,254.315648 C44.1880349,250.820675 41.4106068,248 38.0003049,248 Z M38.0003049,250.693229 C39.8809156,250.693229 41.4054054,252.241536 41.4054054,254.151528 C41.4054054,256.061519 39.8809156,257.609827 38.0003049,257.609827 C36.1190844,257.610446 34.5945946,256.062139 34.5945946,254.151528 C34.5945946,252.241536 36.1190844,250.693229 38.0003049,250.693229 Z"
                            id="rides-boder"
                        />
                    </g>
                </g>
            </g>
        </svg>
    );
};

LocationPin.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

LocationPin.defaultProps = {
    className: undefined,
    style: undefined,
};

export default LocationPin;