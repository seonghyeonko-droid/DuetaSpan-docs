# v3_rag_28_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_28",
#     "name": "정슬",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-07-02",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2026-05-20",
#       "category": "work",
#       "text": "User works as a accountant."
#     },
#     {
#       "date": "2026-03-04",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-02-20",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2026-02-07",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in March."
#     },
#     {
#       "date": "2026-01-03",
#       "category": "home",
#       "text": "User's home address is 960 Pine Court."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-07-16",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2026-02-04",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 퇴역 군인 부처가 언제 만들어졌는지 궁금해. 그냥 대충 말해주 | S2 음, 그건 알겠는데, 그 전에는 퇴역 군인들을 누가 챙겼는데? | S3 체계적인 게 아니었다고? 그럼 어떤 식으로 지원을 해줬는데?  | S4 연금국? 연금만 줬다는 거야? 다른 건 없었어?

     0.00s  user  발화 시작: 퇴역 군인 부처가 언제 만들어졌는지 궁금해. 그냥 대충 말해주는 것 말고, 정확한 날짜로 알고 싶어.
     6.64s  <ret> 발화 (turn1 첫 프레임)
     6.95s  agent 발화 시작: <ret> 퇴역 군인들을 위한 부처가 처음 만들어진 건… 구십 년 전인 천구백삼십 년 칠월 이십일이 그 날이
     7.09s  user  발화 끝
     8.56s  ⚡SPAN 주입 [d'=1.92s / d_lead=3.10s]: The Department of Veterans Affairs was established on July 21, 1930.
    14.04s  agent 발화 끝
    15.30s  user  발화 시작: 음, 그건 알겠는데, 그 전에는 퇴역 군인들을 누가 챙겼는데? 그냥 방치해 뒀어?
    21.13s  agent 발화 시작: 그 전에도 퇴역 군인들을 위한 지원이 아예 없었던 건 아니야. 다만 지금처럼 체계적인 부처 형태는 아니었지.
    21.37s  user  발화 끝
    27.93s  user  발화 시작: 체계적인 게 아니었다고? 그럼 어떤 식으로 지원을 해줬는데? 구체적으로 말해 봐.
    28.12s  agent 발화 끝
    33.26s  <ret> 발화 (turn5 첫 프레임)
    33.53s  user  발화 끝
    33.58s  agent 발화 시작: <ret> 예전에는 여러 기관에서 조금씩 지원을 했었지… 천팔백십일 년에 세워진 연금국에서 주로 담당했어. 
    33.76s  ⚡SPAN 주입 [d'=0.50s / d_lead=3.30s]: Prior to 1930, veteran care was primarily managed by the Bureau of Pen
    37.09s  user  발화 시작: 응응.
    37.58s  user  발화 끝
    44.57s  agent 발화 끝
    44.80s  user  발화 시작: 연금국? 연금만 줬다는 거야? 다른 건 없었어?
    48.19s  agent 발화 시작: 연금 외에도 의료 지원이나 직업 훈련 같은 것도 제공하긴 했어. 하지만 규모가 작고, 지원 범위도 제한적이었
    48.36s  user  발화 끝
    55.70s  agent 발화 끝
