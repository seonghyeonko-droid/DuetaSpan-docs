# v3_rag_25_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_25",
#     "name": "지국",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "50s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-04",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2026-04-12",
#       "category": "home",
#       "text": "User's home address is 서울 종로구 세종대로 175."
#     },
#     {
#       "date": "2026-02-09",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-01-15",
#       "category": "work",
#       "text": "User works as a graduate student."
#     },
#     {
#       "date": "2025-09-22",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Korean BBQ."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-12-04",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-08-14",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 안녕하세요. 요즘 잠을 잘 못 자서 걱정이에요. | S2 그럼 마라 산탄젤로는요? 이탈리아 선수 맞죠? | S3 이십오위면 꽤 잘하는 선수였네요. — | S4 그렇군요. 마라 산탄젤로는 언제 은퇴했나요?

     0.00s  user  발화 시작: 안녕하세요. 요즘 잠을 잘 못 자서 걱정이에요.
     3.13s  agent 발화 시작: 안녕하세요. 잠이 안 오시는군요. 편안한 밤을 위해 제가 도와드릴게요.
     3.28s  user  발화 끝
     4.95s  user  발화 시작: 네.
     5.44s  user  발화 끝
     7.62s  agent 발화 끝
     8.28s  user  발화 시작: 혹시 테니스 선수 크리스 에버트가 이탈리아 사람인가요?
    11.49s  <ret> 발화 (turn4 첫 프레임)
    11.88s  agent 발화 시작: <ret> 크리스 에버트는 미국 출신의 전 프로 테니스 선수로, 역사상 가장 위대한 선수 중 한 명으로 꼽힙
    11.89s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.53s]: Chris Evert is an American former professional tennis player, widely r
    12.12s  user  발화 끝
    16.79s  user  발화 시작: 네.
    17.19s  user  발화 끝
    18.41s  agent 발화 끝
    18.91s  user  발화 시작: 그럼 마라 산탄젤로는요? 이탈리아 선수 맞죠?
    21.91s  <ret> 발화 (turn7 첫 프레임)
    21.98s  agent 발화 시작: <ret> 마라 산탄젤로는 은퇴한 이탈리아 프로 테니스 선수이고, 최고 순위는 단식 이십오위였습니다.
    21.99s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.39s]: Mara Santangelo is a retired Italian professional tennis player who ac
    22.19s  user  발화 끝
    25.16s  user  발화 시작: 네.
    25.70s  user  발화 끝
    28.24s  user  발화 시작: 이십오위면 꽤 잘하는 선수였네요. —
    28.36s  agent 발화 끝
    30.34s  user  발화 시작: …혹시 마라 산탄젤로는 에버트처럼 유명한 선수였나요?
    30.50s  user  발화 끝
    33.93s  agent 발화 시작: 마라 산탄젤로는 에버트만큼 널리 알려진 선수는 아니었지만, 이탈리아에서는 꽤 유명한 선수였습니다.
    34.04s  user  발화 끝
    40.46s  user  발화 시작: 그렇군요. 마라 산탄젤로는 언제 은퇴했나요?
    40.65s  agent 발화 끝
    42.84s  <ret> 발화 (turn13 첫 프레임)
    43.24s  agent 발화 시작: <ret> 마라 산탄젤로는 이천십일년 오월 이탈리아 오픈에 참가한 후 프로 테니스에서 은퇴했습니다.
    43.24s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.25s]: Mara Santangelo retired from professional tennis in May 2011, after pa
    43.41s  user  발화 끝
    49.49s  agent 발화 끝
