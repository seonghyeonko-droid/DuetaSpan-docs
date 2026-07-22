# v3_mcp_04_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_04",
#     "name": "성온",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "late 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-08",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2026-04-10",
#       "category": "emergency",
#       "text": "User's emergency contact is Hana."
#     },
#     {
#       "date": "2026-03-26",
#       "category": "anniversary",
#       "text": "User's anniversary is October 13."
#     },
#     {
#       "date": "2026-02-07",
#       "category": "hobby",
#       "text": "User is into sea kayaking."
#     },
#     {
#       "date": "2026-01-22",
#       "category": "wake",
#       "text": "User usually wakes up close to 9am after night shifts."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-02",
#       "title": "Renovating the bathroom",
#       "bullets": [
#         "budget of 6M won",
#         "wants a walk-in shower instead of a tub"
#       ]
#     },
#     {
#       "date": "2026-04-26",
#       "title": "Learning to invest",
#       "bullets": [
#         "asked about index funds vs individual stocks",
#         "wants to start with 500k won a month"
#       ]
#     },
#     {
#       "date": "2026-03-26",
#       "title": "Sorting out a visa",
#       "bullets": [
#         "applying for a working-holiday visa to Australia",
#         "asked about the bank-balance requirement"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 프로젝트 폴더에서 메인 파이썬 파일 좀 찾아줘.
     2.63s  <ret> 발화 (turn1 첫 프레임)
     2.98s  agent 발화 시작: <ret> [curious] 프로젝트 폴더를 살펴봤는데, 아쉽게도 메인 파이썬 파일이 없네요. 파일 이름이 
     3.19s  user  발화 끝
     3.85s  ⚡SPAN 주입 [d'=1.22s / d_lead=7.03s]: (tool result) (no matches)
     7.79s  user  발화 시작: 응.
     8.24s  user  발화 끝
     9.90s  user  발화 시작: 이상하네. 그럼 그냥 프로젝트 폴더에 뭐가 있는지 다 보여줘.
    10.01s  agent 발화 끝
    12.84s  <ret> 발화 (turn4 첫 프레임)
    13.13s  agent 발화 시작: <ret> [happy] 폴더 내용을 확인해 보니 앱 파이썬, 유틸스 파이썬, 리콰이어먼츠 텍스트 파일이랑 
    13.28s  user  발화 끝
    13.44s  ⚡SPAN 주입 [d'=0.60s / d_lead=9.36s]: (tool result) app.py, utils.py, requirements.txt, README.md
    21.92s  user  발화 시작: 아, 앱 파이썬이 맞네! 그럼 이거 내용 좀 읽어줘.
    22.49s  agent 발화 끝
    23.47s  agent 발화 시작: 음.
    23.96s  agent 발화 끝
    24.65s  user  발화 끝
    24.68s  <ret> 발화 (turn7 첫 프레임)
    24.76s  agent 발화 시작: <ret> 아주 간단하게 헬로 월드를 출력하는 코드만 들어있습니다. 더 도와드릴 게 있을까요?
    25.52s  ⚡SPAN 주입 [d'=0.84s / d_lead=5.65s]: (tool result) "print('Hello World')"
    30.41s  agent 발화 끝
