# v3_to_ot_12_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 마침 궁금했는데요, 마이클 잭슨의 “Beat It” 기타 솔로를 실제로 연주한 사람은 누구였을까요? 뭔가 좀
     8.19s  <ret> 발화 (turn1 첫 프레임)
     8.44s  user  발화 끝
     8.59s  agent 발화 시작: <ret> 정말 명곡에 대한 날카로운 관찰이세요. 에디 반 헤일런이 실제로 마이클 잭슨의 “Beat It” 
    10.19s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.71s]: Eddie Van Halen performed the guitar solo on Michael Jackson’s “Beat I
    13.34s  user  발화 시작: 예.
    13.73s  user  발화 끝
    19.07s  agent 발화 끝
    19.07s  user  발화 시작: 와, 진짜요? 반 헤일런이요? 잭슨의 평소 밴드와 더 가까운 사람이 연주했을 거라고 항상 생각했어요.
    24.77s  agent 발화 시작: 많은 분들이 잭슨의 단골 뮤지션 중 한 명이었을 거라고 생각하셨죠. 당시 음악계에는 꽤 놀라운 일이었답니다.
    25.19s  user  발화 끝
    26.88s  user  발화 시작: 네.
    27.29s  user  발화 끝
    31.53s  agent 발화 끝
    33.06s  user  발화 시작: 저기, 혹시 냉동고에서 닭고기를 꺼내 놓으셨나요?
    36.21s  user  발화 시작: 죄송해요. 다시 “Beat It” 이야기로 돌아가서, 처음에는 하기 싫어했나요?
    36.38s  user  발화 끝
    40.01s  user  발화 끝
    40.06s  <ret> 발화 (turn8 첫 프레임)
    40.22s  agent 발화 시작: <ret> 그의 처음 망설임에 대한 이야기는 정말 흥미롭답니다. 처음에는 에디 반 헤일런이 계약 문제 때문에
    41.42s  ⚡SPAN 주입 [d'=1.36s / d_lead=3.62s]: Eddie Van Halen initially refused to play on “Beat It” due to a contra
    45.34s  user  발화 시작: 예.
    45.88s  user  발화 끝
    49.06s  agent 발화 끝
    49.16s  user  발화 시작: 계약 문제요? 정말 놀랍네요. 그럼, 무슨 마음이 바뀌었나요?
    52.94s  <ret> 발화 (turn11 첫 프레임)
    53.18s  agent 발화 시작: <ret> 도전, 그리고 상당한 규모의 도전이 그를 설득한 것 같아요. 마이클 잭슨이 직접 에디 반 헤일런을
    53.33s  user  발화 끝
    54.06s  ⚡SPAN 주입 [d'=1.12s / d_lead=4.66s]: Michael Jackson personally visited Van Halen and convinced him to part
    62.03s  agent 발화 끝
