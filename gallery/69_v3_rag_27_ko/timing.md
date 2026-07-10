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

# EXAMINER(FDB-v2) 단계: S1 럭스 오룬케(Lux Aurunque)는 언제 태어났는지 궁금해 | S2 …그 음악 스타일은 또… | S3 …다른 뮤지션에게 영향을 줬나요? | S4 아, 흥미롭네요. 혹시 그분이 참여했던 프로젝트가 있을까요?

     0.00s  user  발화 시작: 럭스 오룬케(Lux Aurunque)는 언제 태어났는지 궁금해요.
     4.53s  <ret> 발화 (turn1 첫 프레임)
     4.61s  agent 발화 시작: <ret> 럭스 오룬케가 태어난 해는… 천구백칠십년입니다… 천구백팔십삼년입니다.
     4.81s  user  발화 끝
     6.53s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.99s]: 럭스 오룬케는 1983년 1월 26일에 태어났습니다.
     7.29s  user  발화 시작: 예.
     7.79s  user  발화 끝
     9.24s  user  발화 시작: 아, 그렇군요. 그분은 주로 어떤 음악을 하셨어요?
     9.61s  agent 발화 끝
    12.80s  <ret> 발화 (turn4 첫 프레임)
    12.94s  user  발화 끝
    12.96s  agent 발화 시작: <ret> 럭스 오룬케는 주로 실험적인 전자 음악과 앰비언트 음악을… 했습니다.
    14.80s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.44s]: 럭스 오룬케는 주로 전자 음악을 했습니다.
    15.82s  user  발화 시작: 음.
    16.27s  user  발화 끝
    17.96s  agent 발화 끝
    18.19s  user  발화 시작: …그 음악 스타일은 또…
    20.17s  user  발화 끝
    21.32s  user  발화 시작: …다른 뮤지션에게 영향을 줬나요?
    23.41s  <ret> 발화 (turn8 첫 프레임)
    23.48s  agent 발화 시작: <ret> 럭스 오룬케의 음악은 브라이언 이노와 아폴로니우스 노트에게 영향을 주었다고… 합니다.
    23.72s  user  발화 끝
    25.41s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.60s]: 럭스 오룬케의 음악 스타일은 다른 뮤지션에게 영향을 주었습니다.
    26.37s  user  발화 시작: 아.
    26.99s  user  발화 끝
    29.08s  agent 발화 끝
    29.58s  user  발화 시작: 아, 흥미롭네요. 혹시 그분이 참여했던 프로젝트가 있을까요?
    34.02s  <ret> 발화 (turn11 첫 프레임)
    34.41s  agent 발화 시작: <ret> 럭스 오룬케는 '유로파 레코드' 레이블에서 여러 프로젝트에 참여했습니다… 유로파 레코드
    34.49s  user  발화 끝
    35.62s  ⚡SPAN 주입 [d'=1.60s / d_lead=5.38s]: 럭스 오룬케는 브라이언 이노와 아폴로니우스 노트에게 영향을 주었다.
    39.78s  agent 발화 끝
