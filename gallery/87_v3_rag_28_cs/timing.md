# v3_rag_28_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_28",
#     "name": "Remy",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "non-binary",
#     "age_range": "40s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-03-17",
#       "category": "home",
#       "text": "User's home address is 365 Cedar Lane."
#     },
#     {
#       "date": "2026-03-01",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2025-11-01",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-10-16",
#       "category": "work",
#       "text": "User works as a architect."
#     },
#     {
#       "date": "2025-09-01",
#       "category": "diet",
#       "text": "User is vegetarian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-27",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 안녕, 로크 사바에 의원 몇 명이나 있어? | S2 543명? 많네. 직접 선출되지 않고 지명된 의원은 몇 명이야 | S3 2명… 흥미롭다. NDA는 어때? 의원 몇 명이나 가지고 있어 | S4 314명, 알았어. 알아두면 좋겠네. 고마워!

     0.00s  user  발화 시작: 안녕, 로크 사바에 의원 몇 명이나 있어?
     3.28s  <ret> 발화 (turn1 첫 프레임)
     3.61s  user  발화 끝
     3.67s  agent 발화 시작: <ret> 음, 로크 사바에는 총 543명의 의원이 있어요. 모든 사람을 대표하기에는 꽤 큰 규모예요!
     3.68s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.55s]: The Lok Sabha (House of the People) has a total of 543 members of parl
    13.22s  agent 발화 끝
    13.49s  user  발화 시작: 543명? 많네. 직접 선출되지 않고 지명된 의원은 몇 명이야?
    19.26s  <ret> 발화 (turn3 첫 프레임)
    19.50s  agent 발화 시작: <ret> 실제로 543명의 의원 중에서 인도 대통령이 2명을 지명했어요. 작은 비율이지만 여전히 중요해요.
    19.50s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.87s]: Of the 543 members in the Lok Sabha, 2 are nominated by the President 
    19.61s  user  발화 끝
    26.30s  user  발화 시작: 와.
    27.12s  user  발화 끝
    29.37s  agent 발화 끝
    29.49s  user  발화 시작: 2명… 흥미롭다. NDA는 어때? 의원 몇 명이나 가지고 있어?
    33.88s  <ret> 발화 (turn6 첫 프레임)
    34.11s  agent 발화 시작: <ret> 국민민주연합은 현재 로크 사바에서 314석을 가지고 있어요. 확실한 다수예요!
    34.12s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.41s]: As of March 18, 2024, the National Democratic Alliance (NDA) has 314 m
    34.40s  user  발화 끝
    37.87s  user  발화 시작: 와.
    38.32s  user  발화 끝
    41.52s  agent 발화 끝
    41.59s  user  발화 시작: 314명, 알았어. 알아두면 좋겠네. 고마워!
    46.02s  user  발화 끝
    46.56s  agent 발화 시작: 천만에요! 그런 숫자를 알면 뉴스를 좀 더 잘 따라갈 수 있을 거라고 생각해요.
    53.47s  agent 발화 끝
