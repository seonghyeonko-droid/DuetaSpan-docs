# v3_pers_39_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi 내부 보유 — A 프로필=프롬프트 내재/no-RAG, B 메모리=RAG <ret>):
#   A. 프로필: Name: 세재 · Location: Seoul, South Korea · Nationality: Korean · Gender: female · Age: 50s · TZ: Asia/Seoul (KST, UTC+9) · Currency: KRW (₩)
#   B. 저장 메모리:
#      [2026-08-02] User has a Corgi named Mochi.
#      [2026-04-05] User is into birdwatching.
#      [2026-01-14] User is lactose-intolerant.
#      [2026-01-08] User's favorite cuisine is Thai.
#   B. 과거 대화 요약:
#      [2026-07-06] Booked a dentist appointment — asked for an early-morning slot; prefers Dr. Han


     0.00s  agent 발화 시작: 안녕하세요, 세재님. I’m Aril, and I’m so glad to connect with you to
     9.04s  agent 발화 끝
    10.22s  user  발화 시작: Aril… that’s a pretty name. But a life coach for friends? Is
    16.47s  user  발화 끝
    16.73s  agent 발화 시작: It absolutely is, 세재님! Friendships can be such a source of j
    20.63s  user  발화 시작: Yeah.
    21.13s  user  발화 끝
    25.01s  user  발화 시작: I— I mean, I’ve been feeling really lonely lately, even with
    25.12s  agent 발화 끝
    31.79s  agent 발화 시작: That sounds really difficult, 세재님. Feeling isolated even *am
    31.86s  user  발화 끝
    41.16s  agent 발화 끝
