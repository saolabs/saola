<?php

namespace App\Modules\Home\Services;

interface HomeServiceInterface
{
    public function getHomeData(): array;
    public function getFeaturedContent(): array;
    public function getRecentPosts(int $limit = 5): array;
    public function getStatistics(): array;
}
