# v3_abs_21_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_abs_21",
#     "name": "우형",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-24",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     },
#     {
#       "date": "2026-02-01",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2025-09-16",
#       "category": "work",
#       "text": "User works as a physical therapist."
#     },
#     {
#       "date": "2025-06-24",
#       "category": "home",
#       "text": "User's home address is 서울 강남구 역삼동 678-9."
#     },
#     {
#       "date": "2025-06-04",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-12-07",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-11-10",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-08-05",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 남자분들이 흔히 겪는 증상이 궁금해요. | S2 아, 그렇군요. 그럼 잠을 잘 자려면 어떻게 해야 할까요? | S3 … 혹시 수면 음악 같은 거 추천해 주실 수 있나요? | S4 좋은 정보네요. 감사합니다.

     0.00s  user  발화 시작: 남자분들이 흔히 겪는 증상이 궁금해요.
     1.73s  <ret> 발화 (turn1 첫 프레임)
     1.96s  agent 발화 시작: <ret> 죄송하지만, 현재로서는 그 질문에 대한 정보가 없습니다.
     1.96s  user  발화 끝
     2.87s  ⚡SPAN 주입 [d'=1.14s / d_lead=2.74s]: (no information found)
     4.70s  user  발화 시작: 아, 그렇군요. 그럼 잠을 잘 자려면 어떻게 해야 할까요?
     4.70s  agent 발화 끝
     8.23s  agent 발화 시작: 편안한 잠자리를 위한 몇 가지 방법을 알려드릴게요. 규칙적인 수면 습관을 –
     8.23s  user  발화 끝
    12.54s  user  발화 시작: … 혹시 수면 음악 같은 거 추천해 주실 수 있나요?
    12.54s  agent 발화 끝
    16.25s  <ret> 발화 (turn5 첫 프레임)
    16.46s  agent 발화 시작: <ret> 수면을 유도하는 음악은 여러 종류가 있어요.
    16.46s  user  발화 끝
    16.83s  ⚡SPAN 주입 [d'=0.58s / d_lead=2.35s]: Music_3_LookupMusic
    18.81s  agent 발화 시작: 잔잔한 클래식 음악이나 자연의 소리가 도움이 될 수 있습니다.
    18.81s  agent 발화 끝
    22.34s  user  발화 시작: 응.
    22.34s  agent 발화 끝
    22.73s  agent 발화 시작: 심신을 안정시키는 효과가 있는 멜로디를 선택해 보세요.
    22.73s  user  발화 끝
    25.48s  user  발화 시작: 좋은 정보네요. 감사합니다.
    25.48s  agent 발화 끝
    26.65s  user  발화 끝
