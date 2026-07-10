# v3_rag_27_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_27",
#     "name": "연준",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "50s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-17",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     },
#     {
#       "date": "2025-12-07",
#       "category": "home",
#       "text": "User's home address is 945 Elm Street."
#     },
#     {
#       "date": "2025-12-06",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2025-09-15",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     },
#     {
#       "date": "2025-06-11",
#       "category": "work",
#       "text": "User works as a high-school teacher."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-03",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 럭스 아우룬케 작곡가가 태어난 해가 언제예요? | S2 …주로 어떤 장르의 음악을 만드세요? | S3 드론 음악이요? 그게 어떤 스타일이에요? — | S4 그렇군요. 알려주셔서 감사합니다.

     0.00s  user  발화 시작: 럭스 아우룬케 작곡가가 태어난 해가 언제예요?
     2.96s  <ret> 발화 (turn1 첫 프레임)
     3.03s  agent 발화 시작: <ret> 럭스 아우룬케 작곡가가 태어난 해는… 천구백칠십 년입니다.
     3.23s  user  발화 끝
     4.96s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.75s]: "[source: AllMusic] Lux Aurunque was born in 1970."
     5.00s  user  발화 시작: 예.
     5.49s  user  발화 끝
     6.41s  user  발화 시작: 아, 그렇군요. 그럼 그분은…
     6.78s  agent 발화 끝
     9.13s  user  발화 끝
    10.53s  user  발화 시작: …주로 어떤 장르의 음악을 만드세요?
    12.97s  <ret> 발화 (turn5 첫 프레임)
    13.11s  user  발화 끝
    13.12s  agent 발화 시작: <ret> 럭스 아우룬케 작곡가는 주로 다크 앰비언트와 드론 음악을 만드세요.
    14.97s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.03s]: "[source: Rate Your Music] Lux Aurunque primarily composes dark ambien
    15.40s  user  발화 시작: 음.
    15.80s  user  발화 끝
    17.09s  user  발화 시작: 드론 음악이요? 그게 어떤 스타일이에요? —
    17.15s  agent 발화 끝
    19.59s  user  발화 시작: … 혹시 그분이 다른 이름으로 활동하기도 하나요?
    19.67s  user  발화 끝
    22.66s  <ret> 발화 (turn9 첫 프레임)
    22.74s  agent 발화 시작: <ret> 다른 이름으로 활동하는지… 지금 확인해 볼게요.
    22.86s  user  발화 끝
    24.66s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.38s]: "(tool result) No known aliases found for Lux Aurunque."
    26.02s  agent 발화 시작: 다른 이름으로 활동한 기록은 없는 것 같아요. 럭스 아우룬케라는 이름으로만 활동하는군요.
    26.11s  agent 발화 끝
    28.82s  user  발화 시작: 아.
    29.32s  user  발화 끝
    31.34s  agent 발화 끝
    31.89s  user  발화 시작: 그렇군요. 알려주셔서 감사합니다.
    34.66s  user  발화 끝
