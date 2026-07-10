# v3_rag_28_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_28",
#     "name": "Lucia",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "female",
#     "age_range": "50s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-26",
#       "category": "work",
#       "text": "User works as a nurse."
#     },
#     {
#       "date": "2026-03-27",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-03-03",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2025-10-11",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2025-07-27",
#       "category": "home",
#       "text": "User's home address is 820 Cedar Lane."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-29",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-11-13",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 어, 베테랑스 어페어스에 대해 읽고 있었는데… 장관급 부처가  | S2 1930년? 좀… 늦은 것 같아. 있잖아, 그 전에 뭐, 베테 | S3 그러면 국이 먼저고, 그다음에 부처가 된 거야? 근데 장관 자 | S4 아, 그렇구나… 이제 됐어.

     0.00s  user  발화 시작: 어, 베테랑스 어페어스에 대해 읽고 있었는데… 장관급 부처가 된 건 언제야?
     4.43s  <ret> 발화 (turn1 첫 프레임)
     4.83s  agent 발화 시작: <ret> 음, 베테랑스 어페어스가 장관급 부처로 승격된 건 천구백삼십 년 3월 15일이에요. 그 필요성을 
     4.83s  ⚡SPAN 주입 [d'=2.00s / d_lead=12.25s]: The Department of Veterans Affairs became a cabinet-level department o
     4.95s  user  발화 끝
     8.82s  user  발화 시작: 응응.
     9.46s  user  발화 끝
    17.04s  user  발화 시작: 1930년? 좀… 늦은 것 같아. 있잖아, 그 전에 뭐, 베테랑스 국 같은 게 있었던 거 아냐?
    17.07s  agent 발화 끝
    23.25s  <ret> 발화 (turn4 첫 프레임)
    23.49s  agent 발화 시작: <ret> 네, 천구백이십일 년 8월 9일에 제1차 세계대전 참전용사들을 위한 혜택을 관리하기 위해 베테랑스
    23.49s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.92s]: The Veterans Bureau was established on August 9, 1921, originally to a
    23.62s  user  발화 끝
    31.01s  user  발화 시작: 응응.
    31.64s  user  발화 끝
    33.41s  agent 발화 끝
    34.54s  user  발화 시작: 그러면 국이 먼저고, 그다음에 부처가 된 거야? 근데 장관 자리를 얻게 된 추진력은 뭐였어?
    41.56s  agent 발화 시작: 뭐, 참전용사 권리 옹호 운동이 커지고 있었고, 전담 부처는 그들의 복지에 대한 더 큰 의지를 나타내는 신호
    41.58s  user  발화 끝
    51.90s  agent 발화 끝
    52.74s  user  발화 시작: 아, 그렇구나… 이제 됐어.
    54.67s  user  발화 끝
