# v3_defer_10_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 혹시 작년 프랑스 휴가 사진들 찾아줄 수 있어? 썸네일 말고.
     4.11s  <ret> 발화 (turn1 첫 프레임)
     4.18s  agent 발화 시작: <ret> 네, 찾아볼게요. 작년 프랑스 휴가 사진 127장이 검색됐어요. 썸네일은 제외했습니다.
     4.40s  user  발화 끝
     4.61s  ⚡SPAN 주입 [d'=0.50s / d_lead=1.33s]: (tool result) Found 127 image files matching "France holiday" from 202
     8.22s  user  발화 시작: Exactly.
     9.36s  user  발화 끝
    10.81s  agent 발화 끝
    13.47s  user  발화 시작: 그 중에서 에펠탑 사진만 보여줘.
    15.40s  <ret> 발화 (turn4 첫 프레임)
    15.64s  agent 발화 시작: <ret> 에펠탑 사진을 찾아드릴게요. 에펠탑 사진이 35장 검색됐어요. 보여드릴까요?
    15.78s  user  발화 끝
    16.36s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.48s]: (tool result) Filtered 35 image files from the previous search contain
    22.26s  agent 발화 끝
