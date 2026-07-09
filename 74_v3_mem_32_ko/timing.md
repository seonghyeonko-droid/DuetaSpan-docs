# v3_mem_32_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_32",
#     "name": "Manon",
#     "location": {
#       "city": "Berlin",
#       "country": "Germany",
#       "timezone": "Europe/Berlin (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "German",
#     "gender": "female",
#     "age_range": "late 30s",
#     "language": "German"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-07-25",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in March."
#     },
#     {
#       "date": "2026-06-14",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2026-03-10",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2026-02-26",
#       "category": "diet",
#       "text": "User is gluten-free."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-07-12",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2026-01-20",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 아, 네. 투날로 씨. 지난번에 교토 여행 계획을 세우고 있었 | S2 아, 맞다! 삼월이었죠. 그럼 지금부터 항공권 예약을 알아봐야 | S3 음… 저는 글루텐 프리 식단을 하고 있는데, 혹시 기내식도 글 | S4 와, 정말 감사합니다.

     0.00s  agent 발화 시작: 안녕하세요, 마농님. 저는 투날로예요. 창의적인 막힘이나 자신감 문제로 고민하시는 분들을 돕는 상담사랍니다.
     8.35s  agent 발화 끝
     9.14s  user  발화 시작: 아, 네. 투날로 씨. 지난번에 교토 여행 계획을 세우고 있었잖아요. 그때 제가 언제 가기로 했었죠?
    15.28s  <ret> 발화 (turn2 첫 프레임)
    15.35s  agent 발화 시작: <ret> 기억을 떠올려 드리자면… 내년 삼월에 교토 여행을 계획하고 계셨어요.
    15.49s  user  발화 끝
    16.16s  ⚡SPAN 주입 [d'=0.88s / d_lead=1.68s]: [2026-07-25] User is planning a trip to Kyoto in March.
    20.34s  user  발화 시작: 아, 맞다! 삼월이었죠. 그럼 지금부터 항공권 예약을 알아봐야 할 것 같아요.
    20.39s  agent 발화 끝
    24.28s  agent 발화 시작: 물론이죠. 혹시 특별히 선호하는 항공사나 시간대가 있으신가요? 아니면 제가 알아봐 드릴까요?
    24.41s  user  발화 끝
    29.23s  user  발화 시작: 네.
    29.62s  user  발화 끝
    30.86s  agent 발화 끝
    31.81s  user  발화 시작: 음… 저는 글루텐 프리 식단을 하고 있는데, 혹시 기내식도 글루텐 프리로 신청할 수 있을까요?
    37.61s  <ret> 발화 (turn7 첫 프레임)
    37.68s  agent 발화 시작: <ret> 좋은 질문이에요. 글루텐 프리 식단을 하고 계시니, 항공사에 요청해서 글루텐 프리 기내식을 준비할
    37.92s  user  발화 끝
    38.57s  ⚡SPAN 주입 [d'=0.96s / d_lead=0.98s]: [2026-02-26] User is gluten-free.
    45.98s  agent 발화 끝
    46.05s  user  발화 시작: 와, 정말 감사합니다.
    47.89s  user  발화 끝
    48.08s  agent 발화 시작: 천만에요. 마농님께 도움이 될 수 있어서 기뻐요.
    52.15s  agent 발화 끝
