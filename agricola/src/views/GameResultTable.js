import React from 'react';
import { Dialog, DialogContent, DialogTitle, Button, Box } from '@mui/material';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const initialScores = [
  { player: '플레이어 1', 밭: 5, 울타리: 3, 곡식: 2, 양: 4, 빈칸: 1, 외양간: 2, 집: 3, 가족구성원: 4, 주요설비: 5, 보조설비: 3, 구걸: 0 },
  { player: '플레이어 2', 밭: 3, 울타리: 2, 곡식: 4, 양: 5, 빈칸: 0, 외양간: 3, 집: 2, 가족구성원: 3, 주요설비: 4, 보조설비: 5, 구걸: 1 },
  { player: '플레이어 3', 밭: 4, 울타리: 4, 곡식: 3, 양: 2, 빈칸: 2, 외양간: 5, 집: 4, 가족구성원: 5, 주요설비: 2, 보조설비: 4, 구걸: 0 },
  { player: '플레이어 4', 밭: 2, 울타리: 5, 곡식: 5, 양: 3, 빈칸: 1, 외양간: 4, 집: 5, 가족구성원: 2, 주요설비: 3, 보조설비: 2, 구걸: 1 },
];

function GameResultTable({ open, onClose }) {
  const calculateTotalScores = () => {
    return initialScores.map(score => {
      const total = Object.keys(score).reduce((sum, key) => {
        if (key !== 'player') sum += score[key];
        return sum;
      }, 0);
      return { ...score, total };
    });
  };

  const totalScores = calculateTotalScores();
  const winner = totalScores.reduce((max, score) => (score.total > max.total ? score : max), totalScores[0]);

  return (
    <Dialog
      open={open}
      fullScreen
      PaperProps={{
        style: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // 배경을 반투명하게 설정
        },
      }}
    >
      <DialogTitle style={{ color: 'white' }}>게임 결과</DialogTitle>
      <DialogContent>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>플레이어</TableCell>
                <TableCell>밭</TableCell>
                <TableCell>울타리</TableCell>
                <TableCell>곡식</TableCell>
                <TableCell>양</TableCell>
                <TableCell>빈칸</TableCell>
                <TableCell>외양간</TableCell>
                <TableCell>집</TableCell>
                <TableCell>가족구성원</TableCell>
                <TableCell>주요설비</TableCell>
                <TableCell>보조설비</TableCell>
                <TableCell>구걸</TableCell>
                <TableCell>총점</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {totalScores.map((row, index) => (
                <TableRow key={index} style={row.player === winner.player ? { backgroundColor: 'yellow' } : {}}>
                  <TableCell style={row.player === winner.player ? { fontWeight: 'bold' } : {}}>{row.player}</TableCell>
                  <TableCell>{row.밭}</TableCell>
                  <TableCell>{row.울타리}</TableCell>
                  <TableCell>{row.곡식}</TableCell>
                  <TableCell>{row.양}</TableCell>
                  <TableCell>{row.빈칸}</TableCell>
                  <TableCell>{row.외양간}</TableCell>
                  <TableCell>{row.집}</TableCell>
                  <TableCell>{row.가족구성원}</TableCell>
                  <TableCell>{row.주요설비}</TableCell>
                  <TableCell>{row.보조설비}</TableCell>
                  <TableCell>{row.구걸}</TableCell>
                  <TableCell>{row.total}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <Button variant="contained" onClick={onClose} sx={{ mr: 2, backgroundColor: '#eee', color: '#000' }}>
            게임 마치기
          </Button>
          <Button variant="contained" color="primary" onClick={onClose}>
            게임 다시 시작하기
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
}

export default GameResultTable;
