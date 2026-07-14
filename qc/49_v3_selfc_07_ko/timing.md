# v3_selfc_07_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_07",
#     "name": "노민",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "50s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-10",
#       "category": "show",
#       "text": "User is currently watching a historical K-drama."
#     },
#     {
#       "date": "2026-06-08",
#       "category": "work",
#       "text": "User works as a musician."
#     },
#     {
#       "date": "2026-06-06",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2026-05-20",
#       "category": "schedule",
#       "text": "User has a 9-to-6 weekday schedule."
#     },
#     {
#       "date": "2026-05-14",
#       "category": "gym",
#       "text": "User has a gym membership near the office."
#     },
#     {
#       "date": "2026-05-06",
#       "category": "wake",
#       "text": "User usually wakes up at 5:30am for a run."
#     },
#     {
#       "date": "2026-04-14",
#       "category": "dislike",
#       "text": "User can't stand durian."
#     },
#     {
#       "date": "2026-02-15",
#       "category": "medication",
#       "text": "User takes an inhaler for asthma."
#     },
#     {
#       "date": "2026-02-06",
#       "category": "music",
#       "text": "User likes listening to K-ballads."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-25",
#       "title": "Booking a moving company",
#       "bullets": [
#         "moving a 2-bedroom apartment across town on the 30th",
#         "needs help disassembling furniture"
#       ]
#     },
#     {
#       "date": "2026-02-04",
#       "title": "Building a PC",
#       "bullets": [
#         "budget around 2M won for gaming",
#         "torn between two GPUs"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 이번 주 토요일에 부산에서 서울 가는 기차표 좀 찾아주세요. | S2 음… 칠월 십이일로 바꿔서 찾아줘. | S3 아니, 그 시간에 괜찮아.… | S4 …그럼 그 기차표 예매해 줘.

     0.00s  user  발화 시작: 이번 주 토요일에 부산에서 서울 가는 기차표 좀 찾아주세요.
     4.12s  <ret> 발화 (turn1 첫 프레임)
     4.51s  agent 발화 시작: <ret> 이번 주 토요일 부산에서 서울 가는 기차가 오후 두 시 삼십오분에 출발해서 다섯 시 오십분에 도착
     4.51s  user  발화 끝
     5.39s  ⚡SPAN 주입 [d'=1.28s / d_lead=10.53s]: (tool result) The next train from Busan to Seoul departs at 14:35 on J
    15.05s  user  발화 시작: 음… 칠월 십이일로 바꿔서 찾아줘.
    15.05s  agent 발화 끝
    17.30s  <ret> 발화 (turn3 첫 프레임)
    17.55s  agent 발화 시작: <ret> 칠월 십이일에는 아침 여덟 시에 출발해서 오전 열한 시 십오분에 서울역에 도착하는 기차가 있고, 
    17.55s  user  발화 끝
    17.60s  ⚡SPAN 주입 [d'=0.30s / d_lead=9.53s]: (tool result) The first train from Busan to Seoul on July 12, 2026, le
    27.08s  user  발화 시작: 네.
    27.08s  agent 발화 끝
    27.58s  agent 발화 시작: 혹시 다른 시간대도 알아봐 드릴까요? 기차 시간은 여러 개가 있답니다.
    27.58s  user  발화 끝
    32.60s  user  발화 시작: 아니, 그 시간에 괜찮아.…
    32.60s  agent 발화 끝
    34.61s  user  발화 시작: …그럼 그 기차표 예매해 줘.
    34.61s  user  발화 끝
    36.76s  <ret> 발화 (turn8 첫 프레임)
    37.11s  agent 발화 시작: <ret> 부산에서 서울 가는 칠월 십이일 아침 여덟 시 기차표 예매가 완료되었습니다. 좌석은 십이 씨이고,
    37.11s  user  발화 끝
    37.77s  ⚡SPAN 주입 [d'=1.01s / d_lead=10.53s]: (tool result) Train ticket confirmed: Busan to Seoul, July 12, 2026, 0
    47.65s  agent 발화 시작: 기차 여행 잘 다녀오세요.
    47.65s  agent 발화 끝
    49.65s  agent 발화 끝
