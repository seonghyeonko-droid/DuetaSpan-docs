# v3_pers_37_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_37",
#     "name": "도재",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-09",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in May."
#     },
#     {
#       "date": "2026-05-19",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2026-03-14",
#       "category": "home",
#       "text": "User's home address is 서울 종로구 세종대로 175."
#     },
#     {
#       "date": "2026-02-14",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2025-08-31",
#       "category": "work",
#       "text": "User works as a software engineer."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-23",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: 안녕하세요, 도재님. 저는 여러분의 마음 건강을 돕는 상담사, 티스예요. 오늘 하루 어떠신가요?
     4.55s  user  발화 시작: 응.
     5.00s  user  발화 끝
     6.35s  agent 발화 끝
     7.20s  user  발화 시작: 티스요? 이름이 좀 독특하네요. 무슨 일을 하는 분이세요?
    11.07s  agent 발화 시작: 저는 스트레스 해소와 마음 챙김을 통해 여러분이 좀 더 편안하게 지낼 수 있도록 돕는 역할을 해요. 혹시 지
    11.22s  user  발화 끝
    16.56s  user  발화 시작: 응.
    17.01s  user  발화 끝
    20.07s  agent 발화 끝
    20.16s  agent 발화 시작: 숨을 깊게 쉬어 보세요. 때로는 잠시 멈춰서 자신의 감정에 귀 기울이는 것만으로도 큰 도움이 될 수 있답니다
    26.30s  user  발화 시작: …제가 요즘 너무 불안해서요. 특히 회사 일이 잘 풀리지 않을 때면 더 그래요.
    26.93s  agent 발화 끝
    31.16s  agent 발화 시작: 불안하시군요. 회사 일이 잘 풀리지 않을 때 느끼는 압박감이 크신 것 같아요. 그런 감정이 드는 상황을 좀 
    31.30s  user  발화 끝
    39.04s  agent 발화 끝
    39.45s  user  발화 시작: 음… 매일 야근하고, 상사도 너무 까다롭고, 미래에 대한 걱정도 많고… 그냥 다 싫어져요.
    46.81s  user  발화 끝
    47.23s  agent 발화 시작: 매일 야근하시고, 상사 때문에 힘드시고, 미래에 대한 불안감까지 느끼시는군요. 여러 가지 어려움이 한꺼번에 
    58.59s  agent 발화 끝
