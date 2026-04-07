/**
 * @swagger
 * tags:
 *   name: Logs
 *   description: Admin log APIs
 */

/**
 * @swagger
 * /api/logs:
 *   get:
 *     summary: Get logs (Admin only)
 *     tags: [Logs]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Logs fetched
 *       403:
 *         description: Admin only
 */