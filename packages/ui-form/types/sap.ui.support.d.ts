// For Library Version: 1.89.0

declare module "sap/ui/support/library" {
  /**
   * @SINCE 1.89.0-SNAPSHOT
   *
   * Defines the Audiences.
   */
  export enum Audiences {
    /**
     * Audience just on Application level.
     */
    Application = "Application",
    /**
     * Audience just on Control level.
     */
    Control = "Control",
    /**
     * Audience just on Internal level.
     */
    Internal = "Internal",
  }
  /**
   * @SINCE 1.89.0-SNAPSHOT
   *
   * Issue Categories.
   */
  export enum Categories {
    /**
     * Accessibility issue category.
     */
    Accessibility = "Accessibility",
    /**
     * Binding issue category.
     */
    Bindings = "Bindings",
    /**
     * Consistency issue category.
     */
    Consistency = "Consistency",
    /**
     * DataModel issue category.
     */
    DataModel = "DataModel",
    /**
     * Fiori Guidelines issue category.
     */
    FioriGuidelines = "FioriGuidelines",
    /**
     * Functionality issue category.
     */
    Functionality = "Functionality",
    /**
     * Memory issue category.
     */
    Memory = "Memory",
    /**
     * Modularization issue category.
     */
    Modularization = "Modularization",
    /**
     * Other issue category.
     */
    Other = "Other",
    /**
     * Performance issue category.
     */
    Performance = "Performance",
    /**
     * Usability issue category.
     */
    Usability = "Usability",
    /**
     * Usage issue category.
     */
    Usage = "Usage",
  }
  /**
   * @SINCE 1.89.0-SNAPSHOT
   *
   * Analysis history formats.
   */
  export enum HistoryFormats {
    /**
     * ABAP history format.
     */
    Abap = "Abap",
    /**
     * String history format.
     */
    String = "String",
  }
  /**
   * @SINCE 1.89.0-SNAPSHOT
   *
   * Defines severity types.
   */
  export enum Severity {
    /**
     * High issue severity.
     */
    High = "High",
    /**
     * Low issue severity.
     */
    Low = "Low",
    /**
     * Medium issue severity.
     */
    Medium = "Medium",
  }
  /**
   * @SINCE 1.89.0-SNAPSHOT
   *
   * Contains the available system presets.
   */
  export enum SystemPresets {
    /**
     * The accessibility preset.
     */
    Accessibility = "undefined",
  }
}

declare module "sap/ui/support/supportRules/History" {
  /**
   * Analysis result which is created after analysis with the SupportAssistant.
   */
  export type AnalysisResult = {
    /**
     * The loaded libraries.
     */
    loadedLibraries: Record<string, Object>;
    /**
     * Data for the performed analysis.
     */
    analysisInfo: Object;
    /**
     * The metadata provided in the analyze method, if any.
     */
    analysisMetadata: Object;
    /**
     * Array with information about the application.
     */
    applicationInfo: Object[];
    /**
     * Technical information.
     */
    technicalInfo: Object[];
    /**
     * Count of the issues, found in the application.
     */
    totalIssuesCount: number;
    /**
     * Array with all the issues, which were found.
     */
    issues: Object[];
  };
}

declare module "sap/ui/support/RuleAnalyzer" {
  import { AnalysisResult } from "sap/ui/support/supportRules/History";

  import { HistoryFormats } from "sap/ui/support/library";

  /**
   * The `sap.ui.support.RuleAnalyzer` namespace is the central entry point for the Support Assistant functionality.
   *
   * Overview: `sap.ui.support.RuleAnalyzer` reveals an API for the Support Assistant which you can easily
   * work with to analyze an application.
   *
   * Usage:
   *
   *
   * 	 -  `sap.ui.support.RuleAnalyzer.addRule` method allows adding a new rule.
   * 	 -  `sap.ui.support.RuleAnalyzer.analyze` starts the analysis of the application.
   * 	 -  Then the result can be accessed with methods `sap.ui.support.RuleAnalyzer.getAnalysisHistory`, `sap.ui.support.RuleAnalyzer.getLastAnalysisHistory`
   * 			or `sap.ui.support.RuleAnalyzer.getFormattedAnalysisHistory`.
   *
   * For more information, see {@link topic:a34eb58aaf124f538a3ead23a6cab04a Support Assistant API}.
   */
  interface RuleAnalyzer {
    /**
     * @SINCE 1.60
     *
     * Adds new temporary rule when in silent mode
     */
    addRule(
      /**
       * Settings for the new rule. For detailed information about its properties see {@link topic:eaeea19a991d46f29e6d8d8827317d0e
       * Rule Property Values}
       */
      oRule: Object
    ): string;
    /**
     * Main method to perform analysis of a given running application.
     *
     * Allows to choose a particular execution scope - desired part of the UI to be checked and a flexible way
     * to specify the list of rules to be used.
     */
    analyze(
      /**
       * The execution scope of the analysis (see {@link topic:e15067d976f24b11907f4c262bd749a0 Execution Scope}).
       */
      oExecutionScope?: {
        /**
         * Possible values are `global`, `subtree` or `components`.
         */
        type?: string;
        /**
         * ID of the root element that forms a subtree. Use when the scope type is `subtree`.
         */
        parentId?: string;
        /**
         * List of IDs of the components to be analyzed. Use only when the scope type is `components`.
         */
        components?: string[];
      },
      /**
       * This optional parameter allows for selection of subset of rules for the analysis. You can pass:
       *
       * 	 - A rule preset object containing the preset ID and the list of rules it contains.
       * 	 - A string that refers to the ID of a system preset.
       * 	 - An object array with a plain list of rules.
       */
      vPresetOrRules?: object | string | object[],
      /**
       * Metadata in custom format. Its only purpose is to be included in the analysis report.
       */
      oMetadata?: object
    ): Promise<any>;
    /**
     * Returns the history of all executed analyses.
     */
    getAnalysisHistory(): AnalysisResult[];
    /**
     * Returns the history of all executed analyses into formatted output depending on the passed format.
     */
    getFormattedAnalysisHistory(
      /**
       * The format into which the history object will be converted. Possible values are listed in sap.ui.support.HistoryFormats.
       */
      sFormat?: HistoryFormats | keyof typeof HistoryFormats
    ): any;
    /**
     * Returns the result of the last analysis performed.
     */
    getLastAnalysisHistory(): AnalysisResult;
  }
  const RuleAnalyzer: RuleAnalyzer;
  export default RuleAnalyzer;
}

declare namespace sap {
  interface IUI5DefineDependencyNames {
    "sap/ui/support/jQuery.sap.support": undefined;

    "sap/ui/support/library": undefined;

    "sap/ui/support/RuleAnalyzer": undefined;

    "sap/ui/support/supportRules/ExecutionScope": undefined;

    "sap/ui/support/supportRules/History": undefined;

    "sap/ui/support/supportRules/RuleSet": undefined;
  }
}
