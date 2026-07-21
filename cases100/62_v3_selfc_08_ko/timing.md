# v3_selfc_08_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_08",
#     "name": "혜현",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "late 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-09",
#       "category": "airline",
#       "text": "User usually flies with United."
#     },
#     {
#       "date": "2026-04-19",
#       "category": "floor",
#       "text": "User lives on the 12th floor."
#     },
#     {
#       "date": "2026-01-20",
#       "category": "bloodtype",
#       "text": "User's blood type is B-."
#     },
#     {
#       "date": "2026-01-19",
#       "category": "streaming",
#       "text": "User subscribes to a shared Netflix family plan."
#     },
#     {
#       "date": "2026-01-06",
#       "category": "dislike",
#       "text": "User can't stand cilantro."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-19",
#       "title": "Building a PC",
#       "bullets": [
#         "budget around 2M won for gaming",
#         "torn between two GPUs"
#       ]
#     },
#     {
#       "date": "2026-03-12",
#       "title": "Studying for the TOEIC",
#       "bullets": [
#         "target score is 850",
#         "exam is in about six weeks"
#       ]
#     },
#     {
#       "date": "2026-02-17",
#       "title": "Meal-prep planning",
#       "bullets": [
#         "wants high-protein lunches under 600 calories",
#         "avoiding dairy this month"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 이번 주 월요일로 예약된 회의 취소해 줘. | S2 잠깐만, 화요일 말고 수요일로 바꿔줘. | S3 … 수요일 오후 세 시로 해 줘. | S4 아니, 괜찮아. 그건 다야.

     0.00s  user  발화 시작: 이번 주 월요일로 예약된 회의 취소해 줘.
     3.00s  <ret> 발화 (turn1 첫 프레임)
     3.24s  user  발화 끝
     3.38s  agent 발화 시작: <ret> 네, 회의 취소가 완료되었어요. 확인 번호는 엠 케이 칠 이 구 사입니다.
     3.96s  ⚡SPAN 주입 [d'=0.96s / d_lead=5.89s]: (tool result) {"status": "success", "confirmation id": "MK7294"}
     7.66s  user  발화 시작: 음.
     8.16s  user  발화 끝
     9.26s  agent 발화 끝
    10.34s  user  발화 시작: 아, 그런데 혹시 다음 주 화요일로 다시 예약할 수 있을까?
    15.20s  user  발화 끝
    15.24s  <ret> 발화 (turn4 첫 프레임)
    15.41s  agent 발화 시작: <ret> 다음 주 화요일로 다시 예약해 드렸습니다. 확인 번호는 큐 엘 팔 오 일 육입니다.
    15.59s  ⚡SPAN 주입 [d'=0.35s / d_lead=5.93s]: (tool result) {"status": "success", "confirmation id": "QL8516"}
    18.66s  user  발화 시작: 음.
    19.11s  user  발화 끝
    21.31s  user  발화 시작: 잠깐만, 화요일 말고 수요일로 바꿔줘.
    21.35s  agent 발화 끝
    24.92s  user  발화 끝
    24.95s  agent 발화 시작: 수요일로 변경해 드리려고 하는데—
    26.66s  user  발화 시작: … 수요일 오후 세 시로 해 줘.
    27.40s  agent 발화 끝
    29.22s  <ret> 발화 (turn9 첫 프레임)
    29.38s  user  발화 끝
    29.81s  agent 발화 시작: <ret> 수요일 오후 세 시로 변경 완료되었어요. 확인 번호는 브이 엑스 삼 공 이 팔입니다. [happy
    30.23s  ⚡SPAN 주입 [d'=1.01s / d_lead=9.69s]: (tool result) {"status": "success", "confirmation id": "VX3028"}
    39.50s  agent 발화 끝
    39.53s  user  발화 시작: 아니, 괜찮아. 그건 다야.
    42.90s  user  발화 끝
    43.27s  agent 발화 시작: 네, 알겠습니다. 혹시 업무 관련해서 스트레스 받으시는 일이 있으신가요?
    49.19s  agent 발화 끝
