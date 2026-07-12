# v3_mcp_02_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_02",
#     "name": "민형",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "late 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-03-10",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2026-02-09",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-02-07",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Korean BBQ."
#     },
#     {
#       "date": "2025-11-12",
#       "category": "work",
#       "text": "User works as a marketing manager."
#     },
#     {
#       "date": "2025-07-22",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-12-07",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 혹시 제 프로젝트 폴더 안에… | S2 …있는 이미지 파일들을 찾아줄 수 있을까요? | S3 아, 그렇군요. 이번 주 토요일에 서울에서 부산 가는 기차표  | S4 음… 케이 티 엑스로 예매해 줘.

     0.00s  user  발화 시작: 혹시 제 프로젝트 폴더 안에…
     2.57s  user  발화 시작: …있는 이미지 파일들을 찾아줄 수 있을까요?
     2.57s  user  발화 끝
     5.26s  <ret> 발화 (turn2 첫 프레임)
     5.66s  agent 발화 시작: <ret> 프로젝트 폴더 안에서 이미지 파일 세개를 찾았습니다. image1.jpg, photo_2024.p
     5.66s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.17s]: (tool result) Found: image1.jpg (2024-07-03 14:30), photo_2024.png (20
     5.66s  user  발화 끝
    11.83s  user  발화 시작: 네.
    11.83s  agent 발화 끝
    12.35s  user  발화 시작: 아, 그렇군요. 이번 주 토요일에 서울에서 부산 가는 기차표 좀 알아봐 줄 수 있을까요?
    12.35s  user  발화 끝
    19.15s  <ret> 발화 (turn5 첫 프레임)
    19.55s  agent 발화 시작: <ret> 이번 주 토요일 서울에서 부산 가는 기차표는 세 종류가 있습니다. 열네시 삼십분 케이 티 엑스는 
    19.55s  ⚡SPAN 주입 [d'=2.00s / d_lead=16.46s]: (tool result) 14:30 KTX 123 (₩59,800), 16:00 ITX-새마을 456 (₩45,000), 18
    19.55s  user  발화 끝
    36.02s  user  발화 시작: 오.
    36.02s  agent 발화 끝
    36.53s  user  발화 시작: 음… 케이 티 엑스로 예매해 줘.
    36.53s  user  발화 끝
    39.62s  agent 발화 시작: 케이 티 엑스로 예매해 드릴까요?
    39.62s  user  발화 끝
    42.19s  agent 발화 끝
