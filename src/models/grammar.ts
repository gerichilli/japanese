/**
 * Represents a grammar point with multiple usages and multi-language support.
 */
export interface Grammar {
  /**
   * Unique identifier for the grammar point.
   */
  id: string;

  /**
   * The name or title of the grammar point (e.g., "～際（に）").
   */
  title: string;

  /**
   * Meanings of the grammar point in different languages.
   * The key is the language code (e.g., "jp", "en", "vi").
   */
  meanings: Record<string, string>;

  /**
   * Different ways the grammar can be used, including descriptions, structures, and examples.
   */
  usages: Usage[];
}

/**
 * Represents a specific way to use a grammar point.
 */
export interface Usage {
  /**
   * Explanation of how the grammar is used in different contexts, translated into multiple languages.
   * The key is the language code (e.g., "jp", "en", "vi").
   */
  description: Record<string, string>;

  /**
   * Sentence structure associated with this grammar usage.
   */
  structures: Record<string, string>;

  /**
   * A list of example sentences demonstrating this grammar usage.
   */
  examples: Example[];
}

/**
 * Represents an example sentence demonstrating a grammar point.
 */
export interface Example {
  /**
   * The example sentence with translations.
   * The key is the language code (e.g., "jp", "en", "vi").
   */
  sentence: Record<string, string>;

  /**
   * (Optional) An explanation of the example sentence, translated into multiple languages.
   * The key is the language code (e.g., "jp", "en", "vi").
   */
  explanation?: Record<string, string>;
}
