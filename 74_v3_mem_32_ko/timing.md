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


     0.00s  agent 발화 시작: 안녕하세요, 마농 씨. 저는 투날로예요. 창의적인 고민이나 자신감 문제로 힘든 분들을 돕는 상담사랍니다.
     8.16s  agent 발화 끝
     8.93s  user  발화 시작: 아, 네. 투날로 씨 만나서 반가워요. 혹시 제가 전에 말씀드렸던 교토 여행 기억하시나요?
    14.60s  <ret> 발화 (turn2 첫 프레임)
    14.68s  agent 발화 시작: <ret> 네, 기억하고 있어요. 내년 삼 월에 교토 여행을 계획하고 계시다고 말씀해주셨죠.
    14.90s  user  발화 끝
    15.48s  ⚡SPAN 주입 [d'=0.88s / d_lead=1.62s]: [2026-07-25] User is planning a trip to Kyoto in March.
    20.49s  user  발화 시작: 맞아요. 그런데 갑자기 일정이 좀 꼬여서, 혹시 여행 날짜를 변경할 수 있을지 궁금하네요.
    20.60s  agent 발화 끝
    25.72s  agent 발화 시작: 여행 날짜 변경은 언제든지 가능하죠. 혹시 새로운 날짜는 생각해두신 게 있으세요? 아니면 제가 몇 가지 옵션
    25.86s  user  발화 끝
    32.51s  user  발화 시작: 네.
    32.91s  user  발화 끝
    34.62s  agent 발화 끝
    35.56s  user  발화 시작: 음… 삼월 초보다는 삼월 중순쯤으로 미루고 싶은데, 괜찮을까요?
    39.86s  agent 발화 시작: 물론이죠. 삼월 중순으로 미루는 건 괜찮아요. 혹시 특별히 선호하는 날짜가 있으신가요? 예를 들어, 주말이나
    40.05s  user  발화 끝
    50.20s  agent 발화 끝
