# v3_pers_37_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_37",
#     "name": "라민",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "late 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-13",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2026-03-10",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in March."
#     },
#     {
#       "date": "2025-12-15",
#       "category": "work",
#       "text": "User works as a architect."
#     },
#     {
#       "date": "2025-10-09",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2025-09-01",
#       "category": "diet",
#       "text": "User is vegan."
#     },
#     {
#       "date": "2025-06-16",
#       "category": "home",
#       "text": "User's home address is 경기 성남시 분당구 판교로 235."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-11-04",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-09-02",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: 라민 씨, 안녕하세요. 저는 비아미예요. 힘든 시간을 보내고 계신 분들, 변화를 겪고 계신 분들께 함께 걸어
     3.01s  user  발화 시작: 그치.
     3.50s  user  발화 끝
     8.53s  agent 발화 끝
    10.52s  user  발화 시작: 혹시, 그냥 기계인가요?
    12.56s  agent 발화 시작: 기계라기보다는, 라민 씨의 이야기에 귀 기울이고 마음을 나누는 동반자라고 생각해주세요. 어떤 고민이 있으신가
    12.59s  user  발화 끝
    15.59s  user  발화 시작: 음.
    16.09s  user  발화 끝
    20.22s  agent 발화 시작: 지금 당장 말씀하시기 어려우시다면, 괜찮아요. 천천히, 편안하게 생각나는 대로 이야기해주세요. 숨을 고르고,
    20.31s  agent 발화 끝
    26.44s  user  발화 시작: 어.
    27.02s  user  발화 끝
    29.77s  agent 발화 끝
    29.95s  user  발화 시작: 사실… 최근에 직장 상사와의 갈등 때문에 너무 힘들어요. 매일 불안하고, 잠도 제대로 못 자요.
    37.53s  agent 발화 시작: 직장 상사와의 갈등이라… 정말 힘드시겠어요. 그런 상황 속에서 불안하고 잠을 못 이루는 건 당연한 반응이에요
    37.55s  user  발화 끝
    49.96s  agent 발화 끝
